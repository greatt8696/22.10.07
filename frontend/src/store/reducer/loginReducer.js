const initState = {
  isLogin: false,
  id: "",
  pwd: "",
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, isLogin: true, id: payload.id, pwd: payload.pwd };

    default:
      return state;
  }
};
