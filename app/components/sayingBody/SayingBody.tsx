"use client";
import React from "react";
import sayingBody from "./sayingBody.module.scss";
import SayingCards from "../sayingCard/SayingCards";
import SayingGenerator from "../sayingGenerator/SayingGenerator";

const SayingCard: React.FunctionComponent<any> = ({ data }) => {
  return (
    <div className={sayingBody.body}>
      <div className={sayingBody.books}>
        <SayingGenerator data={data} />
        <SayingCards data={data} />
      </div>
    </div>
  );
};

export default SayingCard;
