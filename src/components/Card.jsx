import React from "react";

const Card = ({ name, content, author }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src="/img/c_basic.jpg" alt="" />
      </div>
      <div className="card-content">
        <h5>{name}</h5>
        <p>{content}</p>
      </div>
      <div className="author">
        <div className="author__info">
          <div className="img-container">
            <img src="/img/avt.jpg" alt="" />
          </div>
          <p>{author}</p>
        </div>
        <a href="" className="btn">
          Đăng ký
        </a>
      </div>
    </div>
  );
};

export default Card;
