import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";
import { BsPersonFillAdd } from "react-icons/bs";
import "../sharedCSS.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <Link href={"/"} className="link">
          <span>
            <RxDashboard size={40} />
          </span>
        </Link>
      </div>
      <div>
        <Link href={"/patients"} className="link">
          <span>
            <HiUsers size={40} />
          </span>
        </Link>
      </div>
      <div>
        <Link href={"/newpatient"} className="link">
          <span>
            <BsPersonFillAdd size={40} />
          </span>
        </Link>
      </div>
    </div>
  );
}
