import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchProducts() {
  return axios.get("http://localhost:8000/products");
}
export function addProducts(item) {
  return axios.post("http://localhost:8000/products", item);
}
export function deletProducts(id) {
  return axios.delete("http://localhost:8000/products", id);
}
