import React, { useState, useEffect } from "react";
import { Container, TitleButton } from "./styles";
import { Entypo } from "@expo/vector-icons";

export function ButtonYesNo({ title, border, ...rest }) {
  return (
    <>
      {title.toLowerCase() === "sim" ? (
        <Container
          {...rest}
          style={{
            borderColor: border ? "#639339" : "transparent",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Entypo
            name="dot-single"
            marginLeft={-10}
            size={24}
            color="#639339"
          />
          <TitleButton>{"Sim"}</TitleButton>
        </Container>
      ) : (
        <Container
          {...rest}
          style={{
            marginLeft: 15,
            borderColor: border ? "#BF3B44" : "transparent",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Entypo
            name="dot-single"
            size={24}
            marginLeft={-10}
            color="#BF3B44"
          />
          <TitleButton>{"Não"}</TitleButton>
        </Container>
      )}
    </>
  );
}
