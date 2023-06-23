import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, signOutAsynce } from "../authSlice";
import { Navigate } from "react-router-dom";

export default function SignOut() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    dispatch(signOutAsynce());
  }, []);
  return <div>{!user && <Navigate to="/login" replace={true}></Navigate>}</div>;
}
