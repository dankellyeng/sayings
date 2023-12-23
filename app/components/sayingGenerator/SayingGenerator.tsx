"use client";
import React, { FC, useState } from "react";
import sayingGenerator from "./sayingGenerator.module.scss";
import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";

interface Props {
  data: any[];
}

const SayingGenerator: FC<Props> = ({ ...props }) => {
  const [generatedSaying, setGeneratedSaying] = useState("");
  if (!props) {
    return;
  }

  function generateSaying() {
    setGeneratedSaying(
      sayings[Math.floor(Math.random() * sayings.length)].saying
    );
  }

  const sayings = props.data;

  return (
    <div className={sayingGenerator.allCards}>
      {generatedSaying !== "" ? (
        <div className={sayingGenerator.speechBubble}>
          <p className={sayingGenerator.saying}>{generatedSaying}</p>
        </div>
      ) : (
        <div className={sayingGenerator.placeholder} />
      )}
      <div className={sayingGenerator.imageContainer}>
        <Image
          className={sayingGenerator.image1}
          fill={true}
          src="/images/circle.svg"
          alt="Circle"
        />
        <Image
          className={sayingGenerator.image2}
          fill={true}
          src="/images/saus.webp"
          alt="Sausage"
        />
      </div>
      <div className={sayingGenerator.buttonContainer}>
        <Button color="gray" variant="outline" onClick={() => generateSaying()}>
          <Text className={sayingGenerator.buttonText}> Generate Saying</Text>
        </Button>
      </div>
    </div>
  );
};

export default SayingGenerator;
