import axios from "axios";
// import { toast } from "react-toastify";

export function signupUser(id) {
  return axios.post("http://localhost:8000/user", id);
}
export function loginUser(username) {
  return axios
    .get(`http://localhost:8000/user?username=${username}`)
    .then((res) => res);
}
