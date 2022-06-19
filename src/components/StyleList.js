import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  margin-left: 10px;
  input {
    cursor: pointer;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const Tarefa = styled.div`
  position: relative;
  padding: 8px;
  background-color: #2b2b2b;
  margin-bottom: 10px;
  border-radius: 10px;
  label {
    color: #e8e8e8;
    background-color: transparent;
    text-decoration: ${(props) => (props.checked ? "line-through" : "initial")};
  }
`;
export const Icone = styled.span`
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  gap: 20px;
`;
