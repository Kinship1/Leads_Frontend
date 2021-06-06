const initialState = {
  username: "",
  token: "",
};
export default (auth = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      alert(action.payload.message);
      return { username: action.payload.username, token: action.payload.token };
    }
    case "LOGOUT":
      console.log(action.payload);
      return auth;
    case "REGISTER":
      alert(action.payload.message);
      return { username: action.payload.username, token: action.payload.token };
    case "ERROR": {
      alert("Invalid Credentials");
      return initialState;
    }
    default:
      return auth;
  }
};
