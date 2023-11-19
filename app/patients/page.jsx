import React from "react";
import "../sharedCSS.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Minimenu from "../components/minimenu";

export async function getData() {
  const res = await fetch("https://654a7e481f197d51e4925499.mockapi.io/detail");
  return res.json();
}

const Patients = async () => {
  let patients = await getData();
  return (
    <div className="container">
      <Navbar />
      <div className="firstPage">
        <Minimenu />
        <h1>PATIENTS</h1>

        <div className="secondPage">
          <div className="titleUser">
            <span>Name</span>
            <span>click for details</span>
            <span className="hid">Sign Up Date</span>
          </div>
          <ul>
            {patients.map((p) => (
              <li key={p.id} style={{ listStyleType: "none" }}>
                <Link href={`/patients/${p.id}`} className="p">
                  <div className="list">
                    <div className="name">
                      <span className="im">
                        <img src={p.avatar} alt="" className="img" />
                      </span>
                      <div>{p.name1}</div>
                    </div>
                    <span className="hid">{p.date1.substring(0, 10)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patients;
