import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: gray;
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

export { Button, HeaderContent, HeaderWrap, ContentBtn };
