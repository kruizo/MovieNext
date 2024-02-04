import Link from "next/link";
import React from "react";

const DetailsButton = () => {
  return (
    <Link href="pages/search">
      <button className="btn btn-outline text-primary-content ">
        <i className="fa fa-info-circle text-8xl" aria-hidden="true"></i>
        Learn more
      </button>
    </Link>
  );
};

export default DetailsButton;
