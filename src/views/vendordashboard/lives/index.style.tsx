import styled from "styled-components";

export const LivesContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-top: 50px;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  .ButtonLink {
    text-decoration: none;
    width: 48%;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const LivesTableLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const LivesTableContainer = styled.div`
  margin-top: 70px;
`;

export const LivesTable = styled.div`
  .HeaderPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .HeaderPart > div {
    text-align: left;
    font-size: 20px;

    background-color: #eeeeee;
    color: #555555;

    width: 32%;
    padding: 3px 0 3px 1%;

    border-radius: 10px;
  }
`;
