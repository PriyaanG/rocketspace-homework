import * as React from "react";
import ReactDOM from "react-dom";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import { HfInference } from "@huggingface/inference";
import { useState } from "react";
export default function Story_Problems() {
  const [responseText, changeResponseText] = useState();
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    width: "49.5%",
    textTransform: "none",
    fontSize: 16,
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#212529",
    borderColor: "#212529",
    borderRadius: "0.375rem",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#424649",
      borderColor: "#212529",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#424649",
      borderColor: "#212529",
    },
    "&:focus": {},
  });

  function callAI(e) {
    console.log("hi!");
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    async function query() {
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer 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",
              Accept: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const result = await response.json();
        return result;
      } catch {
        console.error("error");
      }
    }
    query().then((response) => {
      let responseJSON = JSON.stringify(response);
      console.log(responseJSON);
      responseJSON = responseJSON.slice(20, responseJSON.length - 3);
      for (let i = 0; i < responseJSON.length; i++) {
  if (responseJSON.charAt(i) === "\\" && responseJSON.charAt(i+1) === "n"){
    if (responseJSON.charAt(i) === "\\" && responseJSON.charAt(i+1) === "n" && responseJSON.charAt(i+2) === "\\" && responseJSON.charAt(i+3) === "n" ){
      responseJSON =  
        responseJSON.substr(0, i)+". "+
        responseJSON.substr(
            i+4,
            responseJSON.length
        );
    }
    else{
    responseJSON =  
        responseJSON.substr(0, i)+
        responseJSON.substr(
            i+2,
            responseJSON.length
        );
  }
}
      }console.log(responseJSON)
      changeResponseText(responseJSON);
    });

    // [{"sequence":"the answer to the universe is no.","score":0.16963955760002136,"token":2053,"token_str":"no"},{"sequence":"the answer to the universe is nothing.","score":0.07344776391983032,"token":2498,"token_str":"nothing"},{"sequence":"the answer to the universe is yes.","score":0.05803241208195686,"token":2748,"token_str":"yes"},{"sequence":"the answer to the universe is unknown.","score":0.043957844376564026,"token":4242,"token_str":"unknown"},{"sequence":"the answer to the universe is simple.","score":0.04015745222568512,"token":3722,"token_str":"simple"}]
  }

  return (
    <>
      <div>
        <nav
          className="navbar fixed-top bg-body-tertiary"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://cdn.glitch.global/febe269e-2e7c-4cae-8c43-477e746f2735/rocketspacehomework.png?v=1714254608176"
                alt="Rocketspace Homework Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-center logo"
              />
              <span className="text"> Rocketspace Homework</span>
            </a>
          </div>
        </nav>
      </div>
      <div>
        <div className="widthdiv">
          <div>
            <form id="form" onSubmit={callAI}>
              <textarea
                name="inputs"
                autoComplete="on"
                placeholder="Type your story problem here."
                required={true}
              ></textarea>
              <BootstrapButton
                style={{ width: "100%" }}
                variant="contained"
                type="submit"
                disableElevation
                startIcon={<CheckIcon />}
              >
                <span className="Text">Submit Story Problem</span>
              </BootstrapButton>
            </form>
          </div>
        </div>
      </div>
      <div className="answerDiv">
        <div>
          {" "}
          <textarea
            className="answer"
            disabled={true}
            readOnly={true}
            value={responseText}
            placeholder="The answer to your story problem will come here."
            ></textarea>
          <div>
            <span className="homebtn">
              <a href="/">
              <BootstrapButton
                variant="contained"
                disableElevation
                startIcon={<HomeIcon />}
              >
                <div style={{ textAlign: "center" }}>
                  <span
                    className="GoToHomeText"
                    style={{ fontSize: "15", textAlign: "center" }}
                  >
                    {" "}
                    Go To Home
                  </span>
                </div>
              </BootstrapButton>
              </a>
            </span>

            <BootstrapButton
              variant="contained"
              disableElevation
              startIcon={<RefreshIcon />}
              type="submit" form="form"
            >
              <span className="refreshText">Retry</span>
            </BootstrapButton>
          </div>
        </div>
      </div>
    </>
  );
}
