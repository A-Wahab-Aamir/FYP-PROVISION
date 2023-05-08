import React, { useState, useEffect } from "react";
import Images from "./images/imagejson";
import Dropdown from "react-bootstrap/Dropdown";
import "./custom.js";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./control.json";
import "./json.json";
var rendercount = 1;
export default function WebFormDetails(props) {
  var contdata = require("./control.json");
  var scrdata = require("./json.json");

  var btnobj = scrdata["BUTTONS"]["Screen".concat(rendercount)];

  let navigate = useNavigate();
  const [txtcount, textCount] = useState(0);
  const [chkcount, checkCount] = useState(0);
  const [combocount, comboCount] = useState(0);
  const [btncount, btnCount] = useState(0);
  const [radiocount, radioCount] = useState(0);

  var txtlst = [];
  var chklst = [];
  var combolst = [];
  var radiolst = [];
  var btnlst = [];

  Object.keys(btnobj).forEach(function (key) {
    btnlst.push(btnobj[key]);
  });

  const [settitle, setTitle] = useState(
    scrdata["SCREENS"]["Screen".concat(rendercount.toString())]
  );
  var scrcontroldata = contdata["Screen".concat(rendercount).toString()];
  Object.keys(scrcontroldata).forEach(function (key) {
    if (key == "TextBoxes") {
      for (let i = 0; i < Object.keys(scrcontroldata[key]).length; i++) {
        txtlst.push(Object.values(scrcontroldata[key])[i]);
        console.log(txtlst);
      }
    } else if (key == "CheckBoxes") {
      for (let i = 0; i < Object.keys(scrcontroldata[key]).length; i++) {
        // checkCount(chkcount+1)
        chklst.push(Object.values(scrcontroldata[key])[i]);
        console.log(chklst);
      }
    } else if (key == "ComboBoxes") {
      for (let i = 0; i < Object.keys(scrcontroldata[key]).length; i++) {
        // comboCount(combocount+1)
        combolst.push(Object.values(scrcontroldata[key])[i]);
        console.log(combolst);
      }
    } else if (key == "RadioButton") {
      for (let i = 0; i < Object.keys(scrcontroldata[key]).length; i++) {
        // radioCount(radiocount+1)
        radiolst.push(Object.values(scrcontroldata[key])[i]);
        console.log(radiolst);
      }
    }
  });
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const back = () => {
    navigate("/newform");
  };
  const routerChange = () => {
    if (rendercount < 3) {
      rendercount = rendercount + 1;
      <WebFormDetails />;
    } else {
      navigate("/gentrd");
    }
  };
  const handletxtChange = (event) => {
    textCount(txtcount);
    textCount(event.target.value);
  };
  console.log(btnlst);

  return (
    <>
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
                    <div className="innerformcomp1 tilescreen">
                      <h5 className="h5form1 scrtitlehead">Screen Title 1</h5>
                      <input
                        className="shadow p-3 form-control scrititle"
                        type="text"
                        value={settitle}
                        onChange={handleOnChange}
                        placeholder="Default input"
                      />
                    </div>
                    <div className="innerformcomp1">
                      <div className="controlsection">
                        <div className="row">
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                TextBoxes
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox1"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <button
                                className="minus controlcc"
                                onClick={() =>
                                  txtcount > 0
                                    ? textCount(txtcount - 1)
                                    : textCount(0)
                                }
                              >
                                -
                              </button>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value={txtlst.length}
                                onChange={handletxtChange}
                              />
                              <button
                                className="plus controlcc"
                                onClick={() => textCount(txtcount + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                ComboBoxes
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <button
                                onClick={() =>
                                  combocount > 0
                                    ? comboCount(combocount - 1)
                                    : comboCount(0)
                                }
                                className="minus controlcc"
                              >
                                -
                              </button>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value={txtcount}
                              />
                              <button
                                className="plus controlcc"
                                onClick={() => textCount(txtcount + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="space"></div>
                        <div className="row">
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                CheckBoxes
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <button
                                className="minus controlcc"
                                onClick={() =>
                                  chkcount > 0
                                    ? checkCount(chkcount - 1)
                                    : checkCount(0)
                                }
                              >
                                -
                              </button>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value={chkcount}
                              />
                              <button
                                className="plus controlcc"
                                onClick={() => checkCount(chkcount + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                RadioButtons
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <button
                                className="minus controlcc"
                                onClick={() =>
                                  radiocount > 0
                                    ? radioCount(radiocount - 1)
                                    : radioCount(0)
                                }
                              >
                                -
                              </button>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value={radiocount}
                              />
                              <button
                                className="plus controlcc"
                                onClick={() => radioCount(radiocount + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="space"></div>
                        <div className="row">
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                Buttons
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    placeholder="txtbox2"
                                  />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <button
                                className="minus controlcc"
                                onClick={() =>
                                  btncount > 0
                                    ? btnCount(btncount - 1)
                                    : btnCount(0)
                                }
                              >
                                -
                              </button>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value={btnlst.length}
                              />
                              <button
                                className="plus controlcc"
                                onClick={() => btnCount(btncount + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
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
                    class="btn btn-outline-primary"
                  >
                    Back
                  </button>
                </div>

                <div className="col-md-6">
                  <button
                    onClick={routerChange}
                    type="button"
                    class="btn btn-primary"
                  >
                    Proceed
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
WebFormDetails.defaultProps = {
  count: rendercount + 1,
};
