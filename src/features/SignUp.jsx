import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signupUser } from "./auth/authApi";
import { signupAsync } from "./auth/authSlice";
import Header from "./product/Header";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userauth.users);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    let isProceed = true;
    let errorMessage = "Please Enter the value : ";
    if (user.username === "" || user.username === null) {
      isProceed = false;
      errorMessage += " usename ";
    }
    if (user.password === "") {
      isProceed = false;
      errorMessage += " password ";
    }
    if (user.email === "") {
      isProceed = false;
      errorMessage += " email ";
    }
    if (user.phone === "") {
      isProceed = false;
      errorMessage += " phone ";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(user.email)) {
    } else {
      isProceed = false;
      toast.warning("Please Enter the valid formate");
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(signupAsync(user));
      toast.success("Registered successfully");
      navigate("/login");
      console.log("user registered successfully");
    } else {
      console.log("not reg");
    }
    console.log(user);
  };
  return (
    <>
      <Header />
      <div className="container col-6">
        <h1 className="my-5"> Signup Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={user.username}
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={user.email}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              value={user.phone}
              name="phone"
              onChange={handleChange}
              type="number"
              placeholder="Enter Phone"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={user.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Link to="/login">
            <span className="mx-2">Already have account ? </span>{" "}
          </Link>
        </Form>
      </div>
    </>
  );
}
