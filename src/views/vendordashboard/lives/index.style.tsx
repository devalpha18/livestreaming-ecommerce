import styled from "styled-components";

export const LivesContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 25px 35px;
  @media (max-width: 992px) {
    width: calc(100% - 60px);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: 50px;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  .ButtonLink {
    text-decoration: none;
    width: 30%;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const LivesTableLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;
  margin-top: 30px;
`;

export const LivesTableContainer = styled.div`
  margin-top: 20px;
  
  @media (max-width:992px){
  margin-top:20px;
  }
  
  .HeaderSubpart {
    width: 100%;
    overflow: auto;
    contain: content;
    min-width: 480px;
  }
  overflow: auto;
`;

export const LivesTable = styled.div`
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
  
  @media (max-width: 992px) {
    background-color: #ffffff;
    padding: 1rem 1rem;
  }
`;
