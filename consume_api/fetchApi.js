console.log("test");
// reqres in user
const url = "https://reqres.in/api/users";
// const url = "http://127.0.0.1:8000/api/products";

// get product data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.data);
  });

// get by id
const id = 1;
fetch(url + `/${id}`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.status);
  });

// post user
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "ihsan miftahul huda",
    job: "UI/UX Designer",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
