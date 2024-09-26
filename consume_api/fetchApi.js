console.log("test");
// reqres in user
const url = "https://reqres.in/api/users";

// get product data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// get by id
const id = 1;
fetch(url + `/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// post user
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "ihsan",
    job: "fullstack",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
