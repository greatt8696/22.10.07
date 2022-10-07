import axios from "axios";

function logIn(input) {
  const { id, pwd } = input;
  return async (dispatch, getState) => {
    const data = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        id,
        pwd,
      },
    });
    console.log(data);
    data
      ? dispatch({ type: "LOGIN", payload: { id, pwd } })
      : alert("없는아이디");
  };
}

function logOut() {
  return (dispatch, getState) => {
    console.log(getState());
    if (getState().loginReducer.isLogin) dispatch({ type: "LOGOUT" });
  };
}

function signUp(input, setWrap) {
  const { id, pwd } = input;
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      data: {
        id,
        pwd,
      },
    });
    alert(user.data);
    if (user.data === "가입완료") setWrap();
  };
}

export const logInAction = { logIn, logOut, signUp };
