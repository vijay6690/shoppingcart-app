export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const respose = await fetch(
      "http://localhost:8000/orders?user.id=" + userId
    );
    const data = await respose.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser(id) {
  return new Promise(async (resolve) => {
    const respose = await fetch("http://localhost:8000/users/" + id);
    const data = await respose.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
