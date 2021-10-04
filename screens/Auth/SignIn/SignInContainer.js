import React, { useState } from "react";
import utils from "../../../utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEamil] = useState(params?.email || "sw1133@nate.com");
  const [password, setPassword] = useState(params?.password || "12345");
  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Email is invalid");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };
  return (
    <SignInPresenter
      email={email}
      setEamil={setEamil}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
