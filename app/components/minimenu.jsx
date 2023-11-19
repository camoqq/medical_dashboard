import Link from "next/link";
import React from "react";

const Minimenu = () => {
  return (
    <div className="hide">
      <Link href={"/"}>Home </Link>
      <Link href={"/patients"}>Patients </Link>
      <Link href={"/newpatient"}>Add-patient </Link>
    </div>
  );
};

export default Minimenu;
