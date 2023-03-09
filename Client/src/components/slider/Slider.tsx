import React, { useState, useEffect, FC } from "react";
import { Grid } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Slider.css";

type TSlider = {
    images: string[];
};

const ImageCarousel: FC<TSlider> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const nextSlide = () => {
        if (isAnimating) {
            return;
        }

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
            setIsAnimating(false);
        }, 1000);
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowLeft":
                    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
                    break;
                case "ArrowRight":
                    setCurrentIndex((currentIndex + 1) % images.length);
                    break;
                default:
                    break;
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    return (
        <div className="slider_wrapper">
            <ArrowCircleLeftIcon
                className="left_arrow"
                style={{ fontSize: "50px" }}
                onClick={() =>
                    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
                }
            />
            <Grid container className="carousel">
                {images.map((image, index) => (
                    <Grid
                        item
                        xs={12}
                        key={index}
                        className={`slide ${
                            index === currentIndex ? "slide-active" : ""
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "5px",
                                opacity: index === currentIndex || isAnimating ? 1 : 0,
                                transition: "opacity 1s ease-in-out",
                            }}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} className="control"></Grid>
            </Grid>
            <ArrowCircleRightIcon
                className="right_arrow"
                style={{ fontSize: "50px" }}
                onClick={() =>
                    setCurrentIndex((currentIndex + 1) % images.length)
                }
            />
        </div>
    );
};

export default ImageCarousel;
