let controller;
function fetchUser(userId) {
  if (controller) controller.abort();
  controller = new AbortController();

  const fetchData = fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      signal: controller.signal,
    },
  );
  fetchData
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      if (error.name === "AbortError")
        console.log("Request was aborted", error);
      else console.log(error);
    });
}

fetchUser(1);
fetchUser(2);
