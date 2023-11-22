import React, { useState, useEffect } from "react";
import { Container, TitleButton } from "./styles";
import { Entypo } from "@expo/vector-icons";

export function ButtonYesNo({ title, border }) {
  return (
    <>
      {title.toLowerCase() === "sim" ? (
        <Container
          style={{
            marginRight: 10,
            borderColor: border ? "#639339" : "transparent",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Entypo name="dot-single" size={24} color="#639339" />
          <TitleButton>{"Sim"}</TitleButton>
        </Container>
      ) : (
        <Container
          style={{
            marginRight: 10,
            borderColor: border ? "#BF3B44" : "transparent",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Entypo name="dot-single" size={24} color="#BF3B44" />
          <TitleButton>{"Não"}</TitleButton>
        </Container>
      )}
    </>
  );
}
