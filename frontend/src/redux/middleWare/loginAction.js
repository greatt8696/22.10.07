import axios from "axios";

function logIn(input) {
  const { id, pwd } = input;
  return async (dispatch, getState) => {
    const data = await axios({
      method: "post",
      url: "http://localhost:8000/",
      data: {
        id,
        pwd,
      },
    });
    console.log(data);
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

export const logInAction = { logIn, signUp };
