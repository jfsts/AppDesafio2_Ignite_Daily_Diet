import React, { useState } from "react";
import { Alert, Text, Pressable } from "react-native";
import {
  ModalView,
  ModalViewButton,
  ModalModelo,
  ContainerModal,
  TextoModal,
  ButtonModal2,
  ButtonModal,
  TitleButtonModal2,
  TitleButtonModal,
} from "./styles";

export function Modal({
  modalVisible,
  setModalVisible,
  textoModal,
  textoBotaoEsquerdo,
  textoBotaoDireito,
  id,
  funcao,
}) {
  return (
    <ModalModelo
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <ContainerModal>
        <ModalView
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <TextoModal>{textoModal}</TextoModal>
          <ModalViewButton>
            <ButtonModal2 onPress={() => setModalVisible(!modalVisible)}>
              <TitleButtonModal2>{textoBotaoEsquerdo}</TitleButtonModal2>
            </ButtonModal2>
            <ButtonModal onPress={() => funcao(id)}>
              <TitleButtonModal>{textoBotaoDireito}</TitleButtonModal>
            </ButtonModal>
          </ModalViewButton>
        </ModalView>
      </ContainerModal>
    </ModalModelo>
  );
}
