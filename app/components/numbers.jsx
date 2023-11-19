import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { BiMoney } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import "../sharedCSS.css";

export async function getData() {
  const res = await fetch("https://654a7e481f197d51e4925499.mockapi.io/detail");
  return res.json();
}

const Numbers = async () => {
  let users = await getData();

  return (
    <div className="top">
      <div className="box">
        <div className="detail">
          <div className="left">
            <span>{users.length * 3}</span>
            <span>Appointments</span>
            <div className="l3">
              <span>32 </span>
              <span>% higher</span>
            </div>
          </div>
          <div className="right">
            <BsBook />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="detail">
          <div className="left">
            <span>$ 89340</span>
            <span>Total Income</span>
            <div className="l3">
              <span>57 </span>
              <span>% higher</span>
            </div>
          </div>
          <div className="right">
            <BiMoney />
          </div>
        </div>
      </div>
      <div className="box">
        <div className="detail">
          <div className="left">
            <span>374</span>
            <span>New Users</span>
            <div className="l3">
              <span>24 </span>
              <span>% higher</span>
            </div>
          </div>
          <div className="right">
            <FiUserPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
