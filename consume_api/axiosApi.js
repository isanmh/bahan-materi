console.log("axios test");

// reqres in user
const url = "https://reqres.in/api/users";

// get product data
axios.get(url).then((response) => {
  console.log(response.data);
  console.log(response.data.support.text);
  console.log(response.data.support.url);
});

// get by id
const id = 1;
axios.get(url + `/${id}`).then((response) => {
  // console.log(response.data);
});

// post user
axios
  .post(url, {
    name: "ihsan",
    job: "fullstack",
  })
  .then((response) => {
    // console.log(response.data);
  });
