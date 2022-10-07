import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const nav = useNavigate();
  const idInput = useRef();
  const pwdInput = useRef();
  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const userId = useSelector((state) => state.loginReducer.id);

  const dispatch = useDispatch();
  const [wrapState, setWrapState] = useState(true);

  const setWrap = () => {
    setWrapState(!wrapState);
    idInput.current.value = "";
    pwdInput.current.value = "";
  };

  const login = () => dispatch(logInAction.logIn({ ...inputs }));
  const logOut = () => dispatch(logInAction.logOut({ ...inputs }));
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
        {!isLogin ? (
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
            <p>{userId}님 환영합니다.</p>
            <Button onClick={logOut}>로그아웃</Button>
          </>
        )}
      </LoginWrap>
    </HeaderWrap>
  );
};

export default Header;
