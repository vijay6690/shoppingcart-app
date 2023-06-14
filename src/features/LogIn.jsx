import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAsync } from "./auth/authSlice";
import Header from "./product/Header";

export default function LogIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
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
    if (!isProceed) {
      toast.warning(errorMessage);
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get(`http://localhost:8000/user?username=${user.username}`)
        .then((res) => {
          if (res.data[0] == null) {
            toast.warn("User Not Found");
          } else if (res.data[0].password == user.password) {
            toast.success("Logged in successfully");
            sessionStorage.setItem("username", user.username);
            navigate("/");
          } else {
            toast.warn("Entered wrong password");
          }
        });
    } else {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <>
      <Header />
      <div className="container col-6">
        <h1 className="my-5"> Log In Page</h1>
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

          <Link to="/signup">
            <span className="mx-2">Don't have account</span>
          </Link>
        </Form>
      </div>
    </>
  );
}
