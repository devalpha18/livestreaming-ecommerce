import styled from "styled-components";

export const AddProductFormContainer = styled.div`
  margin: 50px 0;
`;

export const FormLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const FormTextField = styled.input`
  margin-bottom: 20px;

  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;
`;

export const SubPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormSelect = styled.select`
  margin-bottom: 20px;

  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;
`;

export const FormImageUpload = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  background-color: #ffffff;

  font-weight: bold;
  font-size: 80px;
  margin: 20px;

  line-height: 200px;
  color: #555555;

  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 50%;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 70px;

  font-size: 20px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 992px) {
    width: 80%;
  }
`;
