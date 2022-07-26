import React, { useEffect } from "react";
import "./DynamicBlock.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "@mui/material/Button";
const DynamicBlock = () => {
  const { text } = useTypewriter({
    words: [
      "Devloper...",
      "Frontend-Devloper...",
      "Backend-Devloper...",
      "Mern-Stack-Devloper...",
    ],
    delaySpeed: 1400,
    loop: 0,
    deleteSpeed: 150,
  });

  const notify = () => toast("Wow Thank So Much Sir/Mam...");

  useEffect(() => {}, []);
  return (
    <>
      <div className="dynamicNameBlock">
        <div className="mynameis"> Hello My Name is</div>
        <div className="name">
          <span style={{ fontSize: "3.5rem" }}>B</span>
          hawishya Singh
        </div>
        <div className="AndIAM">
          And I'M <span className="text">{text}</span>
          <Cursor style={{ color: "red" }} />
        </div>
        
        <Button variant="contained" className="hireme" onClick={notify}>
          Hire me
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default DynamicBlock;
