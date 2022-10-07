import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInAction } from "../../redux/middleWare/loginAction";
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
  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const dispatch = useDispatch();
  const [wrapState, setWrapState] = useState(true);
  const nav = useNavigate();
  const setWrap = () => {
    setWrapState(!wrapState);
    idInput.current.value = "";
    pwdInput.current.value = "";
  };
  const login = () => dispatch(logInAction.logIn({ ...inputs }));
  const signUp = () => dispatch(logInAction.signUp({ ...inputs }));
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
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
            <LoginInput
              name="id"
              ref={idInput}
              onChange={inputHandler}
              value={idInput.id}
            />
            <label>비밀번호: </label>
            <LoginInput
              name="pwd"
              ref={pwdInput}
              onChange={inputHandler}
              value={idInput.pwd}
            />
            <Button onClick={login}>로그인</Button>
            <Button onClick={signUp}>회원가입</Button>
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
