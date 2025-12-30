import React, { useState, useEffect } from "react";
import { PrimaryButton, OutlineButton, ModalContainer } from "../../../components/Ui";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "Messam Naqvi";

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedText.length < targetText.length) {
        setTypedText(targetText.substring(0, typedText.length + 1));
      } else clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [typedText, targetText]);

  return (
    <div style={{ padding: "5%", color: "white" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "white" }}>{typedText}</h1>
      <h2 style={{ color: "#e0e0e0" }}>I build things for the web.</h2>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <PrimaryButton onClick={() => console.log("Email clicked")}>Get in Touch</PrimaryButton>
        <OutlineButton onClick={() => setOpenModal(true)}>Explore Services</OutlineButton>
      </div>

      <ModalContainer open={openModal} onClose={() => setOpenModal(false)}>
        <h3 style={{ color: "purple" }}>My Services</h3>
        <p style={{ color: "white" }}>We offer web dev, ML solutions, desktop apps, consulting.</p>
      </ModalContainer>
    </div>
  );
};

export default Hero;
