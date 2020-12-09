import React from "react";

const Info = () => {
  return (
    <div className="form-container">
      <form action="">
        <label htmlFor="">
          <p>Họ và tên</p>
          <input type="text" required />
        </label>

        <label htmlFor="">
          <p>Số điện thoại</p>
          <input type="text" required />
        </label>

        <label htmlFor="">
          <p>Email</p>
          <input type="text" required />
        </label>

        <label htmlFor="">
          <p>Facebook</p>
          <input type="text" required />
        </label>

        <label htmlFor="">
          <p>Skype</p>
          <input type="text" required />
        </label>
        <div className="btn">lưu lại</div>
      </form>
    </div>
  );
};
export default Info;
