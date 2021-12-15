import styled from "styled-components";

export const AddProductContainer = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  width: calc(100% - 60px);
`

export const AddProductFormContainer = styled.div`
  margin: 50px 0;
`;

export const FormLabel = styled.div`
  font-size: 18px;
  color: #555555;
  font-weight: 300;

  margin-bottom: 10px;
`;

export const FormTextField = styled.input`
  margin-bottom: 20px;

  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
background-color: #eeeeee;
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
  background-color: #eeeeee;

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
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.div`
  text-transform: uppercase;
  color: white;
  background-color: #e8b89b;
  width: 30%;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 40px;

  font-size: 20px;

  line-height: 40px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 992px) {
    width: 80%;
  }
`;
