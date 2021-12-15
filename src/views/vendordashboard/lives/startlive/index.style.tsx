import styled from "styled-components";

export const StartliveContainer = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  width: calc(100% - 60px);
`

export const CameraPart = styled.div`
  margin: 30px 0;
  @media (max-width: 992px) {
    margin-top: 0;
  }
`;

export const Camera = styled.div`
  height: 40vw;
  width: 100%;
  background-color: #000000;
`;

export const CameraButtonPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 992px) {
    margin-top: 0;
  }
  
`;

export const MuteSelectButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 100%;
  border-radius: 50%;
  text-align: center;
  margin: auto;

  height: 50px;

  font-size: 20px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;

  margin-top: 10px;
  margin-bottom: 10px;

  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    width: 90%;
  }
`;

export const SoftwarePart = styled.div`
  margin: 30px 0;
  @media (max-width: 992px) {
    margin-top: 0;
  }
`;

export const SoftwareButtonPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 992px) {
    margin-top: 0;
  }
`;

export const ShowLabel = styled.div`
  font-size: 20px;
  color: #666666;
  font-weight: 600;

  margin-top: 80px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    margin-top: 40px;
  margin-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  width: 43%;
`;

export const MutiButtonContainer = styled.div`
  width: 50px;
`;

export const SoftwareButtonContainer = styled.div`
  width: 48%;
`;

export const LiveButtonContainer = styled.div`
  width: 80%;
`;

export const LiveButtonPart = styled.div`
  display: flex;
  justify-content: center;
`;
