import React, {useEffect, useState} from "react";
import axios from "axios";
import pako from "pako";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./T.css";
import CircularIndeterminate from "./Progress";

const TransferToBack: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!file) {
      console.log('empty')
      return;
    }
    // Compress the file using pako
    const fileBuffer = await file.arrayBuffer();
    const compressedBuffer = pako.gzip(fileBuffer);

    // Create a FormData object and append the compressed file
    const formData = new FormData();
    const compressedFile = new File([compressedBuffer], file.name);
    formData.append("file", compressedFile);
    const response = await axios.post("http://localhost:3333/post-arplas", formData);
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3333/get-portfolio");
      for (let i = 0; i < response.data.length; i++) {
        const data = new Uint8Array(Object.values(response.data[i]));
        const decompressedData = pako.inflate(data);
        const blob = new Blob([decompressedData.buffer]);
        const imageUrl = URL.createObjectURL(blob);
        setImage((prevState) => {
          return [...prevState, imageUrl];
        });
        setLoaded(true);
      }
    } catch (error) {
      console.log(`Something is wrong ${error}`);
    }
  };

  // useEffect(() => {
  //     getData()
  //         .then()
  // }, [])
  return (

      <div>
              <div>
                  <TransitionGroup>
                      {image.length
                          ? image.map((img, index) => {
                              return (
                                  <CSSTransition key={index} classNames="fade" timeout={500}>
                                      <img
                                          key={index}
                                          src={img}
                                          height={"200px"}
                                          width={"200px"}
                                          style={{ marginTop: "150px" }}
                                          alt=""
                                      />
                                  </CSSTransition>
                              );
                          })
                          : null}
                  </TransitionGroup>
              </div>

              <input type="file" accept="image/*" onChange={handleFileChange} />
              <button onClick={handleSubmit}>Upload</button>
              <button onClick={getData}>Download</button>
          </div>

  );
};

export default TransferToBack;
