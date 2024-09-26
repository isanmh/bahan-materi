const urlProduct = "http://127.0.0.1:8000/api/products";

// list data
const listData = document.querySelector(".list-data");
const formProduct = document.querySelector(".form-product");

// form data
const name = document.getElementById("name").value;
const price = document.getElementById("price").value;
const description = document.getElementById("description").value;
const image = document.getElementById("image").value;

let output = "";

// fetch data
const show = (data) => {
  console.log(data);

  data.forEach((item) => {
    output += `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${item.image}" alt="${item.name}" class="card-img-top" />
        <div class="card-body">
          <div class="card-text">${item.name}</div>
          <small>${item.price}</small>
          <div>
              <a href="" class="btn btn-warning" id="edit-post">Edit</a>
              <a href="" class="btn btn-danger" id="delete-data">Hapus</a>
          </div>
        </div>
      </div>
    </div>
    `;
  });

  listData.innerHTML = output;
};

// get data axios
axios.get(urlProduct).then((response) => {
  show(response.data.data);
});

// post data axios
formProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formProduct);
  //   const name = formData.get("name");

  // file image
  const image = document.getElementById("image").files[0];
  formData.append("image", image);

  const data = Object.fromEntries(formData);
  console.log(data);

  //   with header
  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .post(urlProduct, data, { headers })
    .then((response) => {
      console.log(response);
      dataArr = [];
      dataArr.push(response.data.data);
      show(dataArr);
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete data axios
listData.addEventListener("click", (e) => {
  e.preventDefault();

  let deleteBtn = e.target.id === "delete-data";

  let id = e.target.parentElement.parentElement;
  console.log(id);

  //   if (deleteBtn) {
  //     axios
  //       .delete(`${urlProduct}/${id}`)
  //       .then((response) => {
  //         console.log(response);
  //         e.target.parentElement.parentElement.remove();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
});
