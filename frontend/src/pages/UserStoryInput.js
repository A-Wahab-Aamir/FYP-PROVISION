import axios from "axios";
import React, { useState, useEffect } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import Images from "../images/imagejson";
import { useNavigate } from "react-router-dom";

const UserStoryInput = () => {
  let navigate = useNavigate()
  const [userstory, setUserStory] = useState(null);
  const history = useNavigate();
  const handleChange = (event) => {
    setUserStory((userstory) => ({ ...userstory, body: event.target.value }));
  };

  const handleSubmit = async () => {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/insert/",
      data: userstory,
    }).then((response) => {
      console.log(response)
      navigate(`/webform`)
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container webformcontainer">
        <h2 className="h2headingplan text-center animate__animated animate__fadeInLeft ">
          <span className="fontblue">Digital is new Default.</span> Every thing
          happens on screen
        </h2>
        <div className="inner text-left">
          <div className="row">
            <div className="col-md-2">
              <div className="flex">
                <img src={Images.userstory.steps} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="textbox shadow-lg p-3 mb-5 bg-white rounded ">
                <textarea
                  className="userstorytext"
                  name="userstoryname"
                  id="mytextarea"
                  rows="14"
                  cols="80"
                  onChange={handleChange}
                ></textarea>
                <output id="list"></output>
                <div className="part2">
                  <div className="mb-3 px-10">
                    <button
                      id="js-file"
                      type="file"
                      accept=".txt"
                      className="btn btn-primary upload-button"
                    >
                      <FontAwesomeIcon
                        className="historyicon upload"
                        icon={faUpload}
                      />
                      Upload Text file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flex">
                <img src={Images.userstory.rightimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttongroups">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className="btn btn-outline-primary">
                    Back
                  </button>
                </div>

                <div className="col-md-6">
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="cloud" src={Images.home.cloud} alt="" />
    </div>
  );
};

export default UserStoryInput;
