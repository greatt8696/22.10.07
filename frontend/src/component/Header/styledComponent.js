import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: gray;
  margin: 0;
  padding: 0;
  margin-left: 20px;
  cursor: pointer;
  :last-child {
    width: 130px;
  }
  ::before {
  }
`;

const HeaderWrap = styled.div`
  width: 100vw;
  height: 50px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.ul`
  display: flex;
  list-style: none;
`;

const ContentBtn = styled.li`
  color: white;
  cursor: pointer;
  margin-left: 20px;
  padding: 10px;
`;

const LoginWrap = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
`;
const LoginInput = styled.input`
  height: 30px;
  margin: 0;
  padding: 0;
  border: 0;
  margin: 0 10px;
`;

export { Button, HeaderContent, HeaderWrap, ContentBtn, LoginInput, LoginWrap };
