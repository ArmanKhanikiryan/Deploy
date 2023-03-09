import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import LanguageSelector from "../languageSelector";
import DialogComponent from "../dialog";
import Menu from "../menu";
import NavbarAccordion from "./navbarAccordion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="navbar_wrapper">
      <div className="navbar">
        <img
          className="logo"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <div className="nav_container">
          <div className="ul_container">
            <div className="home_btn">
              <span className="dropdown_span" onClick={() => navigate("/")}>
                {t("Home")}
              </span>
            </div>
            <div className="dropdown_component">
              <span
                className="dropdown_span"
                onClick={() => navigate("/products")}
              >
                {t("Products")}
              </span>
              <div className="dropdown">
                <div
                  onClick={() => navigate("/products/1p")}
                  className="dropdown_element"
                >
                  <span>1 {t("Products")}</span>
                </div>
                <div
                  onClick={() => navigate("/products/2p")}
                  className="dropdown_element"
                >
                  <span>2 {t("Products")}</span>
                </div>
                <div
                  onClick={() => navigate("/products/3p")}
                  className="dropdown_element"
                >
                  <span>3 {t("Products")}</span>
                </div>
              </div>
            </div>
            <div className="dropdown_component">
              <span
                className="dropdown_span"
                onClick={() => navigate("/service")}
              >
                {t("Service")}
              </span>
              <div className="dropdown">
                <div
                  onClick={() => navigate("/service/1s")}
                  className="dropdown_element"
                >
                  <span>1 {t("Service")}</span>
                </div>
                <div
                  onClick={() => navigate("/service/2s")}
                  className="dropdown_element"
                >
                  <span>2 {t("Service")}</span>
                </div>
                <div
                  onClick={() => navigate("/service/3s")}
                  className="dropdown_element"
                >
                  <span>3 {t("Service")}</span>
                </div>
              </div>
            </div>
            <div className="home_btn">
              <span
                className="dropdown_span"
                onClick={() => navigate("/about-us")}
              >
                {t("About Us")}
              </span>
            </div>
          </div>
          <Menu />
        </div>
      </div>

      <div className="change_language_wrapper">
        <div className="change_language">
          <div className="contact">
            <div className="contact_container">
              <NavbarAccordion />
              <DialogComponent />
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
