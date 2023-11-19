"use client";
import Navbar from "../components/navbar";
import Minimenu from "../components/minimenu";
import Post from "./post";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseFolder/firebase";
const page = () => {
  // READ
  const [patientData, setpatientData] = useState([]);

  const patientCollectionRef = collection(db, "patdata");

  const getPatient = async () => {
    try {
      const data = await getDocs(patientCollectionRef);
      const filtereddata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filtereddata);
      setpatientData(filtereddata);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPatient();
  }, []);

  // CREATE
  const [newName, setnewName] = useState("");
  const [newPhone, setnewPhone] = useState("");
  const [newDob, setnewDob] = useState("");
  const [newAddress, setnewAddress] = useState("");

  const onSubmit = async () => {
    try {
      await addDoc(patientCollectionRef, {
        name: newName,
        phone: newPhone,
        dob: newDob,
        address: newAddress,
      });
      //call function to display data in the screen
      getPatient();
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE
  const deletePatient = async (id) => {
    const patientDoc = doc(db, "patdata", id);
    await deleteDoc(patientDoc);
    getPatient();
  };
  //UPDATE
  const [editName, seteditName] = useState("");

  const updatePatient = async (id) => {
    const patientDoc = doc(db, "patdata", id);
    await updateDoc(patientDoc, { name: editName });
    getPatient();
  };

  return (
    <div className="container">
      <Navbar />
      <div className="firstPage">
        <Minimenu />
        <h1>ADD A PATIENT</h1>
        <div className="new2">
          <Post
            setnewName={setnewName}
            setnewPhone={setnewPhone}
            setnewDob={setnewDob}
            setnewAddress={setnewAddress}
            onSubmit={onSubmit}
          />
          <div className="newPatient">
            {patientData.map((item) => (
              <div className="boxP">
                <div className="boxItem">
                  <div className="ite">
                    <span>Name: </span>
                    <span>{item.name}</span>
                  </div>
                  <div className="ite">
                    <span>Phone #: </span>
                    <span>{item.phone}</span>
                  </div>
                </div>
                <div className="boxItem">
                  <div className="ite1">
                    <span>Date of Birth: </span>
                    <span>{item.dob}</span>
                  </div>
                  <div className="ite1">
                    <span>Address: </span>
                    <span>{item.address}</span>
                  </div>
                </div>
                <div className="btns">
                  <div className="inp">
                    <button onClick={() => updatePatient(item.id)}>
                      Edit Name
                    </button>
                    <input
                      type="text"
                      onChange={(e) => seteditName(e.target.value)}
                    />
                  </div>
                  <button onClick={() => deletePatient(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
