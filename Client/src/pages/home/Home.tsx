import React, { useEffect, useState } from "react";
import "./Home.css";
import ImageSlider from "../../components/slider/Slider";
import door from "../../assets/icons/door.png";
import window from "../../assets/icons/window.png";
import balcony from "../../assets/icons/balcony.png";
import slide from "../../assets/icons/sliding-door.png";
import { useTranslation } from "react-i18next";

import CircularIndeterminate from "../../transfersToBack/Progress";

const Home = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);


  useEffect(() => {

    fetch('http://localhost:3333/images')
        .then(res => res.json())
        .then(data => {
          setLoaded(true)
          data.forEach((elem: any) => setImage(prevState => [...prevState, elem.url]))
        })
  }, [])




  return (
    <>
      {loaded ? (
        <div>
          <div className="home_header_wrapper">
            <div className="home_header">
              <div className="header_image_div">
                <div className="icons_wrapper">
                  <img className="header_icons" src={door} alt="door" />
                  <span> {t("Doors")} </span>
                </div>

                <div className="icons_wrapper">
                  <img className="header_icons" src={window} alt="window" />
                  <span> {t("Windows")} </span>
                </div>

                <div className="icons_wrapper">
                  <img className="header_icons" src={balcony} alt="window" />
                  <span> {t("Balcony")}</span>
                </div>
                <div className="icons_wrapper">
                  <img className="header_icons" src={slide} alt="slide" />
                  <span> {t("Slide")}</span>
                </div>
              </div>
            </div>
          </div>
          <ImageSlider images={image} />

          <div className="home_body">
            <div className="location">
              <div className="google_maps_div">
                <div className="location_info">
                  <h1>{t("Our Location")}</h1>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.08926518724064!2d44.594324779614496!3d40.18661068286544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa35f52008a29%3A0xf9eb20a3f7c2d59e!2s20%20Kochinyan%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1677957485773!5m2!1sru!2sam"
                  className="google_map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <CircularIndeterminate/>
        </div>
      )}
    </>
  );
};

export default Home;
