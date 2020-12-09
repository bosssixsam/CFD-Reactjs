import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// import ava from "../../img/avt.jpg";
import Info from "./components/Info";
import Mycourses from "./components/MyCourses";
import MyProjects from "./components/MyProjects";
import PaymentHistory from "./components/PaymentHistory";

const Profile = () => {
  let { url } = useRouteMatch();

  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="head-author">
            <div className="img-container">
              <img src="/img/avt.jpg" alt="" />
            </div>
            <h5>trần nghĩa</h5>
            <p>Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="profile__content">
            <div className="profile__content__filter">
              <Link to={`${url}`}>thông tin tài khoản</Link>
              <Link to={`${url}/courses`}>khóa học của bạn</Link>
              <Link to={`${url}/projects`}>dự án đã làm</Link>
              <Link to={`${url}/payment`}>lịch sử thanh toán</Link>
            </div>
            <div className="profile__content__item">
              <Switch>
                <Route path={`${url}/courses`} component={Mycourses} />
                <Route path={`${url}/projects`} component={MyProjects} />
                <Route path={`${url}/payment`} component={PaymentHistory} />
                <Route exact path={`${url}`} component={Info} />
              </Switch>
            </div>
            {/* <Info /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
