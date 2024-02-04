import Link from "next/link";
import React from "react";

const ViewButton = () => {
  return (
    <Link href="pages/search">
      <button className="btn btn-info text-primary-content ">
        <i className="fa fa-play-circle-o text-8xl"></i>
        Watch trailer
      </button>
    </Link>
  );
};

export default ViewButton;
