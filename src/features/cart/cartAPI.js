import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchItems() {
  return axios.get("http://localhost:8000/cart");
}
export function addItems(item) {
  return axios.post("http://localhost:8000/cart", item);
}
export function deletItems(id) {
  return axios.delete(`http://localhost:8000/cart/${id}`);
}
export function updateItems(id, updateItem) {
  return axios.patch(`http://localhost:8000/cart/${id}`, updateItem);
}
