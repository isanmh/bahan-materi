const domain = "http://127.0.0.1:8000";
const urlProduct = `${domain}/api/products`;
const imgUrl = `${domain}/assets/images`;

// list data
const listData = document.querySelector(".list-data");

let output = "";

// fetch data
const show = (data) => {
  console.log(data);

  data.forEach((item) => {
    output += `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${imgUrl}/${item.image}" alt="${item.name}" class="card-img-top" />
        <div class="card-body">
          <div class="card-text">${item.name}</div>
          <div class="card-text">${item.description}</div>
          <small>${item.price}</small>
          
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
