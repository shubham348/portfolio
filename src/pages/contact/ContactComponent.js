import React from "react";
import { style } from "glamor";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./ContactComponent.css";

function Contact() {
  const theme = useTheme();

  const ContactData = {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  };

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header />
      <div className="basic-contact">
        <div className="contact-heading-div">
          <div className="contact-heading-img-div">
            <img
              className="profile-pic"
              src={require(`../../assests/${ContactData["profile_image_path"]}`)}
              alt=""
            />
          </div>
          <div className="contact-heading-text-div">
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              {ContactData["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {ContactData["description"]}
            </p>
            <SocialMedia />
            <br />
            <br />
            {/* <a {...styles} className="general-btn" href={"#"}>
                See my Resume
              </a> */}
          </div>
        </div>
      </div>
      <div className="footerfixed">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
