import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 180px;
  height: 52px;
  text-transform: uppercase;
  background-color: black;
  color: white;
  margin: 0 auto;
  border-radius: 30px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: grey;
    color: inherit;
  }
`;
