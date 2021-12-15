import styled from "styled-components";

export const LiveScheduleContainer = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
`

export const FormPart = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SubPart = styled.div`
  margin: 20px 0;

  &.fullField {
    width: 100%;
  }

  &.halfField {
    width: 48%;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const FormLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const FormTextField = styled.div`
  margin-bottom: 20px;

  background: #eeeeee;
  border: none;
  height: 40px;

  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;

  width: 100%;
`;

export const SubPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  color: #666666;
  font-weight: 600;

  margin-bottom: 50px;
`;

export const TableContainer = styled.div``;

export const TableLabel = styled.div`
  font-size: 20px;
  color: #666666;
  font-weight: 600;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ScheduleTable = styled.div`
  .HeaderPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .HeaderPart > div {
    text-align: left;
    font-size: 15px;

    background-color: #eeeeee;
    color: #555555;

    width: 32%;
    padding: 3px 0 3px 1%;

    border-radius: 10px;
  }
`;
