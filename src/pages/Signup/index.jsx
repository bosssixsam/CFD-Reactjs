// import { useState } from "react";

import useValidate from "../../hooks/useValidate";

export default function Signup() {
  let { data, error, inputChange, handleSubmit } = useValidate(
    {
      name: "",
      phone: "",
      email: "",
      facebook: "",
      payment: "",
      note: "",
    },
    {
      validate: {
        name: {
          required: true,
        },
        email: {
          required: true,
          pattern: "email",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        facebook: {
          required: true,
        },
      },

      message: {
        name: {
          required: "Ho va ten la bat buoc",
        },
        email: {
          required: "Email la bat buoc",
          pattern: "Email khong dung dinh dang",
        },
        phone: {
          required: "So dien thoai la bat buoc",
          pattern: "So dien thoai khong dung dinh dang",
        },
        facebook: {
          required: "Facebook la bat buoc",
        },
      },
    }
  );

  //-- validate form ---
  // let [form, setForm] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   facebook: "",
  //   payment: "",
  //   note: "",
  // });

  // function inputChange(e) {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // }

  // function handleSubmit() {
  //   if (!form.name) {
  //     console.log("họ và tên là bắt buộc");
  //   }
  //   if (!form.phone) {
  //     if (
  //       !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
  //         form.phone
  //       )
  //     ) {
  //       console.log("Số điện thoại không hợp lệ");
  //     }
  //   }
  //   if (!form.email) {
  //     if (
  //       !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //         form.email
  //       )
  //     ) {
  //       console.log("email chưa đúng định dạng");
  //     }
  //   }
  //   if (!form.facebook) {
  //     console.log("hãy truyền vào link facebook");
  //   }
  // }

  function Submit() {
    let er = handleSubmit();

    if (!er) {
      console.log("AJAX");
    }
  }

  return (
    <>
      <section className="signup">
        <div className="container">
          <h3>Chào mừng bạn đến với cfd</h3>
          <form action="/" method="POST">
            <label htmlFor="">
              <p>Họ và tên</p>
              <input
                type="text"
                required
                name="name"
                value={data.name}
                onChange={inputChange}
              />
              {error.name && <p>{error.name}</p>}
            </label>

            <label htmlFor="">
              <p>Số điện thoại</p>
              <input
                type="text"
                required
                name="phone"
                value={data.phone}
                onChange={inputChange}
              />
              {error.phone && <p>{error.phone}</p>}
            </label>

            <label htmlFor="">
              <p>Email</p>
              <input
                type="text"
                required
                name="email"
                value={data.email}
                onChange={inputChange}
              />
              {error.email && <p>{error.email}</p>}
            </label>

            <label htmlFor="">
              <p>Facebook</p>
              <input
                type="text"
                required
                name="facebook"
                value={data.facebook}
                onChange={inputChange}
              />
              {error.facebook && <p>{error.facebook}</p>}
            </label>

            {/* <label htmlFor="">
              <p>Skype</p>
              <input type="text" required onChange={inputChange} />
            </label> */}
            <div className="btn" onClick={handleSubmit}>
              đăng ký
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
