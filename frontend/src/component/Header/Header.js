import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ContentBtn,
  HeaderContent,
  HeaderWrap,
} from "./styledComponent";

const Header = () => {
  const nav = useNavigate();
  return (
    <HeaderWrap>
      <HeaderContent>
        <ContentBtn onClick={() => nav("/")}>MAIN</ContentBtn>
        <ContentBtn onClick={() => nav("/shop")}>SHOP</ContentBtn>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;
