import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ContentBtn,
  HeaderContent,
  HeaderWrap,
  LoginInput,
  LoginWrap,
} from "./styledComponent";

const Header = () => {
  const idInput = useRef();
  const pwdInput = useRef();
  const [wrapState, setWrapState] = useState(true);
  const nav = useNavigate();
  const setWrap = () => {
    setWrapState(!wrapState);
    idInput.current.value = "";
    pwdInput.current.value = "";
  };
  const login = () => {
    console.log(idInput, pwdInput);
    idInput.current.value = "";
    pwdInput.current.value = "";
    setWrapState(false);
  };
  return (
    <HeaderWrap>
      <HeaderContent>
        <ContentBtn onClick={() => nav("/")}>MAIN</ContentBtn>
        <ContentBtn onClick={() => nav("/shop")}>SHOP</ContentBtn>
      </HeaderContent>
      <LoginWrap>
        {wrapState ? (
          <>
            <label>아이디: </label>
            <LoginInput ref={idInput} />
            <label>비밀번호: </label>
            <LoginInput ref={pwdInput} />
            <Button onClick={login}>로그인</Button>
            <Button onClick={login}>회원가입</Button>
          </>
        ) : (
          <>
            <p> 환영합니다.</p>
          </>
        )}
      </LoginWrap>
    </HeaderWrap>
  );
};

export default Header;
