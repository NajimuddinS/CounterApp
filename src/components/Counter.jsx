import React from "react";
import "./Counter.css";
import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Switch from "react-switch";
import { useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  function add() {
    if (count >= 0 && count < 98) {
      setCount((prev) => prev + 1);
    }
  }

  function dec() {
    if (count > 0 && count <= 98) {
      setCount((prev) => prev - 1);
    }
  }

  function rst() {
    setCount(0);
  }

  useEffect(() => {
    let timer;
    if (checked && count < 99) {
      timer = setInterval(() => {
        add();
      }, 1100);
    }
    return () => clearInterval(timer);
  }),
    [checked, count];

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (nextChecked) {
      console.log("Switch is ON");
    } else {
      console.log("Switch is OFF");
    }
  };

  return (
    <>
      <div className="counter-container">
        <h1 className="heading">Counter App</h1>
        <h1 className="number">{count}</h1>
        <button className="add-button" onClick={add}>
          <FaPlus />
        </button>
        <button className="reset-button" onClick={rst}>
          <TfiReload />
        </button>
        <button className="dec-button" onClick={dec}>
          <FaMinus />
        </button>
        <br></br>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            alignItems: "center",
            left: "10px",
            marginTop: "30px",
          }}
        >
          <label>
            <span
              style={{
                position: "relative",
                bottom: "10px",
                right: "10px",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              Auto-Increment
            </span>
            <Switch
              checked={checked}
              onChange={handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Counter;
