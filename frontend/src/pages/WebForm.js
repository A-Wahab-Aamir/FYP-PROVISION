import React, { useState, useEffect, useLayoutEffect } from "react";
// import Images from "./images/imagejson";
// import "./custom.js";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import $ from "jquery";
// import "./json.json";
import Navbar from "../components/Navbar";
import Images from "../images/imagejson";
let first = true
export default function WebForm() {
  let data = require(`./json.json`)
  const [screenstitles, setScreensTitle] = useState({});
  let [screencount, screenCount] = useState(data["NOOFSCREENS"]);
  let navigate = useNavigate();
  const [screenlst, screenLst] = useState([]);
  const [txtscreendrpdown, textDrpDwn] = useState([])
  const [radioscreendrpdown, radioDrpDwn] = useState([])
  const [comboscreendrpdown, comboDrpDwn] = useState([])
  let bool = false
  // useEffect(() => {
  //   getdata()
  // }, [])
  const firstTime = () => {

    for (let i = 0; i < screencount; i++) {
      screenlst.push(
        <div className="col-md-4">
          <div className="screen">
            {data["SCREENS"]["Screen" + (i + 1).toString()][0]}
          </div>
          <input
            className="mt-3 form-control form-control-sm"
            type="text"
            placeholder=".form-control-sm"
            defaultValue={data["SCREENS"]["Screen" + (i + 1).toString()]}

          />
        </div>
      );
    }

  }
  if (first) {
    firstTime()
    first = false
  }


  // const getdata = async () => {
  //   let response = await fetch("http://127.0.0.1:8000/api/get/");
  //   let data = await response.json();
  // } 

  useEffect(() => {
    // screenCount(data["NOOFSCREENS"])
    // firstTime()
    // console.log(screencount)

    // console.log(screenlst)

  }, [])





  const routerChange = () => {
    navigate("/webformdetails");
  };
  const onChange = (event) => {
    screenCount(event.target.value);
  };
  const back = () => {
    navigate("/userstory");
  };

  const addScreen = () => {

    screenCount(screencount + 1);
    screenlst.push(
      <div className="col-md-4">
        <div className="screen"></div>
        <input
          className="mt-3 form-control form-control-sm"
          type="text"
          placeholder=".form-control-sm"
        // value={data["SCREENS"]["Screen" + (i + 1).toString()]}
        />
      </div>)
    // console.log(screencount)
  };
  const minusScreen = () => {
    if (screencount > 1) {
      screenCount(screencount - 1);
      screenlst.pop();
    } else {
      screenCount(1);
    }
  };
  // let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  // items.forEach((item, index) => {
  //   itemList.push(<li key={index}>{item}</li>);
  // });
  return (
    <>
      {bool}

      <Navbar title="PRO-VISION" profileID={1426363} user="Kevin Smith" />
      <div className="container webformcontainer">
        <h2 className="h2headingplan text-center">
          <span className="fontblue">Digital is new Default.</span> Every thing
          happens on screen
        </h2>
        <div className="inner text-left">
          <div className="row">
            <div className="col-md-2">
              <div className="flex">
                <img src={Images.home.leftimage} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="relativerectangle">
                <div className="mainformcard rounded-left shadow-lg card px-0 pt-4 pb-0 mt-3 mb-3">
                  <div className="innerform">
                    {/* form start */}
                    <div className="innerformcomp1">
                      <div className="form-group">
                        <h5 className="h5form1">Project Title</h5>
                        <input
                          className="shadow p-3 form-control"
                          type="text"
                          value={data["TITLE"]}
                          placeholder="Default input"
                        />
                      </div>
                    </div>
                    <div className="innerformcomp2">
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="h5form1">No. of Screens</h5>
                        </div>
                        <div className="col-md-6 text-right">
                          <div className="number">
                            <button className="minus" onClick={minusScreen}>
                              -
                            </button>
                            <input
                              className="counterinput"
                              type="text"
                              value={screencount}
                              onChange={onChange}
                              disabled={true}
                            />
                            <span className="plus" onClick={addScreen}>
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="innerformcomp1">
                      <div className="screenvisual">
                        <div className="row">{screenlst}</div>
                      </div>
                      <div className="screenvisual">
                        <div className="row">
                          {console.log("here")}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="rectangleimg">
                  <img src={Images.home.rectangle} alt="" />
                </div> */}
            </div>
            <div className="col-md-3">
              <div className="flex">
                <img src={Images.home.rightimage} alt="" />
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
                  <button
                    type="button"
                    onClick={back}
                    className="btn btn-outline-primary"
                  >
                    Back
                  </button>
                </div>

                <div className="col-md-6">
                  <button
                    type="button"
                    onClick={routerChange}
                    className="btn btn-primary"
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="cloud" src={Images.home.cloud} alt="" />
    </>
  );
}
