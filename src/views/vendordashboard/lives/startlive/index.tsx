import React, { useState } from "react";

import {
  Wrapper,
  Container,
  CustomButton,
  Title,
} from "../../../../components/pagedefault";

import {
  CameraPart,
  Camera,
  CameraButtonPart,
  MuteSelectButton,
  SoftwarePart,
  SoftwareButtonPart,
  ShowLabel,
  ButtonContainer,
  SoftwareButtonContainer,
  LiveButtonContainer,
  LiveButtonPart,
  MutiButtonContainer,
  StartliveContainer
} from "./index.style";

import { GoMute, GoUnmute } from "react-icons/go";

export default function StartLive() {
  const [mute, setMute] = useState<boolean>(false);
  const handleMute = (e: any) => {
    setMute(!mute);
  };
  return (
      <StartliveContainer>
        <Title>Título da Live</Title>
        <CameraPart>
          <Camera></Camera>
          <CameraButtonPart>
            <ButtonContainer>
              <CustomButton>INICIAR LIVE</CustomButton>
            </ButtonContainer>
            <ButtonContainer>
              <CustomButton>MOSTRAR PRODUTO</CustomButton>
            </ButtonContainer>
            <MutiButtonContainer>
              <MuteSelectButton
                className={mute ? "mute" : "unmute"}
                onClick={(e) => handleMute(e)}
              >
                {mute ? <GoMute></GoMute> : <GoUnmute></GoUnmute>}
              </MuteSelectButton>
            </MutiButtonContainer>
          </CameraButtonPart>
        </CameraPart>
        <SoftwarePart>
          <Title>Usar software</Title>
          <SoftwareButtonPart>
            <SoftwareButtonContainer>
              <CustomButton>TRANSMITIR VIA OBS STUDIO</CustomButton>
            </SoftwareButtonContainer>
            <SoftwareButtonContainer>
              <CustomButton>TRANSMITIR VIA WIRECAST</CustomButton>
            </SoftwareButtonContainer>
          </SoftwareButtonPart>
          <ShowLabel>Chave de integração</ShowLabel>
          <LiveButtonPart>
            <LiveButtonContainer>
              <CustomButton>TRANSMITIR LIVE</CustomButton>
            </LiveButtonContainer>
          </LiveButtonPart>
        </SoftwarePart>
      </StartliveContainer>
  );
}
