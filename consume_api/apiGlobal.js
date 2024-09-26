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
