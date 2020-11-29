const getItems = async () => {
  console.log("hello");

  let courseOffline = "";
  let courseOnline = "";

  let res = await fetch(
    "https://www.cfdtraining.vn/api/danh-sach-khoa-hoc"
  ).then((res) => res.json());
  console.log(res);

  for (let i in res) {
    let thumbnail = JSON.parse(res[i].thubnail);

    console.log(res[i].cfd_teacher[0].title);

    let course = `<div class="card">
    <div class="img-container">
      <img src="https://www.cfdtraining.vn/${thumbnail.link}" alt="" />
    </div>
    <div class="card-content">
      <h5>${res[i].title}</h5>
      <p>${res[i].short_description}</p>
    </div>
    <div class="author">
      <div class="author__info">
        <div class="img-container">
          <img src="./img/avt.jpg" alt="" />
        </div>
        <p>${res[i].cfd_teacher[0].title}</p>
      </div>
      <a href="" class="btn">Đăng ký</a>
    </div>
  </div>`;

    if (res[i].course_type === "offline") {
      courseOffline += course;
    } else {
      courseOnline += course;
    }
  }

  document.querySelector(".card-container.offline").innerHTML = courseOffline;
  document.querySelector(".card-container.online").innerHTML = courseOnline;

  console.log(res);
};

getItems();

let fetchAPI = (url) => {
  return {
    get: () => {
      return fetch(url).then((res) => res.json());
    },

    post: (data) => {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        ...data,
      }).then((res) => res.json());
    },
  };
};

const login = () => {
  let username = "";
  let password = "";

  let dangnhap = fetchAPI(" https://www.cfdtraining.vn/api/dang-nhap").post({
    body: JSON.stringify({
      username,
      password,
    }),
  });

  console.log(dangnhap);
};

login();

//-- Contact ---

const Contact = () => {
  let name = "Quang";
  let phone = "0909875670";
  let email = "quangwk2702@gmail.com";
  let title = "Test";
  let content = "test api contact";

  const callContact = fetchAPI(" https://www.cfdtraining.vn/api/contact").post({
    body: JSON.stringify({
      name,
      phone,
      email,
      title,
      content,
    }),
  });

  console.log(callContact);
};

Contact();

//-- Update Info ---

const UpdateInfo = () => {
  let name = "Quang";
  let phone = "0909875670";
  let email = "quangwk2702@gmail.com";
  let facebook = "";

  const callUpdate = fetchAPI(
    " https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan"
  ).post({
    body: JSON.stringify({
      name,
      phone,
      email,
      facebook,
    }),
  });

  console.log(callUpdate);
};

UpdateInfo();

//-- Register ---

const Register = () => {
  let name = "Quang";
  let phone = "0909875670";
  let email = "quangwk2702@gmail.com";
  let facebook = "";

  const callRegister = fetchAPI(
    " https://www.cfdtraining.vn/api/dang-ky-khoa-hoc"
  ).post({
    body: JSON.stringify({
      name,
      phone,
      email,
      facebook,
    }),
  });

  console.log(callRegister);
};

Register();
