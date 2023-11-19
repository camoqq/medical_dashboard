import React from "react";
import Navbar from "../../components/navbar";
import Minimenu from "../../components/minimenu";
import Image from "next/image";
import pic1 from "../../pics/teeth.png";
import pic2 from "../../pics/heart.jpeg";
import pic3 from "../../pics/eyes.png";

export async function getDataDetail(id) {
  const res = await fetch(
    "https://654a7e481f197d51e4925499.mockapi.io/detail/" + id
  );

  return res.json();
}

export default async function Details({ params }) {
  const patients = await getDataDetail(params.id);

  return (
    <div className="container">
      <Navbar />
      <div className="firstPage">
        <Minimenu />
        <h1>DETAILS</h1>
        <div className="two">
          <div className="detailsLeft">
            <div className="detailsImg">
              <img src={patients.avatar} alt="" className="img1" />
            </div>
            <div className="items">
              <h2>{patients.name1}</h2>
              <span>
                <span className="span">Date of Birth: </span>
                <span>{patients.date1.substring(0, 10)}</span>
              </span>
              <span>
                <span className="span">Phone number: </span>
                {patients.num1}
              </span>
              <span>
                <span className="span">Address: </span>
                {patients.ad1}
              </span>
              <span>
                <span className="span">Patient History: </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quos provident voluptas dicta aliquam rerum neque
                deserunt ex veritatis quae natus esse maxime est dolorem
                tempore, eaque, necessitatibus architecto dolores.
              </span>
            </div>
          </div>
          <div className="parentB">
            <div className="boxes">
              <div className="boxT">
                <h3>DENTIST</h3>
                <p>
                  <span className="span">Next Appt: </span>
                  <span>{patients.date2.substring(0, 10)}</span>
                </p>
                <p>
                  <span className="span">Doctor: </span>
                  <span>{patients.name2}</span>
                </p>
                <p>
                  <span className="span">Location: </span>
                  <span>{patients.ad2}</span>
                </p>
              </div>
              <Image src={pic1} width={70} />
            </div>
            <div className="boxes">
              <div className="boxT">
                <h3>CARDIOLOGIST</h3>
                <p>
                  <span className="span">Next Appt: </span>
                  <span>{patients.date3.substring(0, 10)}</span>
                </p>
                <p>
                  <span className="span">Doctor: </span>
                  <span>{patients.name3}</span>
                </p>
                <p>
                  <span className="span">Location: </span>
                  <span>{patients.ad3}</span>
                </p>
              </div>
              <Image src={pic2} width={70} />
            </div>
            <div className="boxes">
              <div className="boxT">
                <h3>OPHTHALMOLOGIST</h3>
                <p>
                  <span className="span">Next Appt: </span>
                  <span>{patients.date4.substring(0, 10)}</span>
                </p>
                <p>
                  <span className="span">Doctor: </span>
                  <span>{patients.name4}</span>
                </p>
                <p>
                  <span className="span">Location: </span>
                  <span>{patients.ad4}</span>
                </p>
              </div>
              <Image src={pic3} width={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 1.create [id] inside Folder
// 2.destructure params to check it works
// 3. bring getData from other component and add id to fetch
// 4.create variable in the function and make this function async
