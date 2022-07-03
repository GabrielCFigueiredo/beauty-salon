import styled from "styled-components";

export const WrapperHeader = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding: 0 100px;
`;

export const WrapperHeaderCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
`;

export const Card = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  text-align: center;
  padding-top: 15px;
`;
