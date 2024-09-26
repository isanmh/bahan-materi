// url reqres.in/api/users
const url = "https://reqres.in/api/users";

// list data
const listData = document.querySelector(".list-data");

let output = "";

// fetch data
const show = (data) => {
  console.log(data);

  data.forEach((item) => {
    output += `
    <div
          data-aos="zoom-in"
          data-delay="100"
          data-aos-duration="2000"
          class="col-md-4 mb-3"
        >
      <div class="card">
        <img src="${item.avatar}" alt="${item.first_name}" class="card-img-top" />
        <div class="card-body">
          <div class="card-text">${item.first_name} ${item.last_name}</div>
          <small>${item.email}</small>
        </div>
      </div>
    </div>  
    `;
  });

  listData.innerHTML = output;
};

// get data axios
axios.get(url).then((response) => {
  show(response.data.data);
});

// fetch data
// fetch(url + "/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });

// fetch POST data
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({
//     name: "ihsan",
//     job: "programmer",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });

// menngunakan axios
// axios
//   .get(url + "/1")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });

// post axios data
// axios
//   .post(url, {
//     name: "ihsan",
//     job: "programmer",
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });

// fetch data product
// fetch(urlProduct)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });

// get data product
// axios
//   .get(urlProduct)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });

// post detail product by id
// axios
//   .get(urlProduct + "/11")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("error :" + error);
//   });
