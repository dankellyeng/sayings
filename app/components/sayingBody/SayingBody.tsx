"use client";
import React, { useState } from "react";
import sayingBody from "./sayingBody.module.scss";
import { Button } from "@radix-ui/themes";
import SayingCards from "../sayingCard/SayingCards";
import SayingGenerator from "../sayingGenerator/SayingGenerator";

const SayingCard: React.FunctionComponent<any> = ({ data }) => {
  const [hardCoverOnly, setHardCoverOnly] = useState(false);

  const handleHardCoverClick = () => {
    setHardCoverOnly(true);
  };

  const handleGetBooksClick = () => {
    setHardCoverOnly(false);
  };

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
