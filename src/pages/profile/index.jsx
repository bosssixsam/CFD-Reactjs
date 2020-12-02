import React from "react";

import ava from "../../img/avt.jpg";

const Profile = () => {
  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="head-author">
            <div className="img-container">
              <img src={ava} alt="" />
            </div>
            <h5>trần nghĩa</h5>
            <p>Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="profile__content">
            <div className="profile__content__category"></div>
            <form className="profile__content__form"></form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
