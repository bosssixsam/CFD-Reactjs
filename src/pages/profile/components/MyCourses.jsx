import clock from "../../../icons/clock.svg";
import user from "../../../icons/user.svg";

export default function Mycourses() {
  return (
    <div className="myCourse-container">
      <div className="course-card">
        <div className="img-container">
          <img src="/img/c_grunt.jpg" alt="" />
        </div>
        <div className="course-card__content">
          <h5>front-end căng bản</h5>
          <p>Khai giảng ngày 09/09/2019</p>
          <div className="icon-info">
            <div className="icon-info__item">
              <div className="icon-container">
                <img src={clock} alt="" />
              </div>
              <span>54 giờ</span>
            </div>
            <div className="icon-info__item">
              <span>25 video</span>
            </div>
            <div className="icon-info__item">
              <div className="icon-container">
                <img src={user} alt="" />
              </div>
              <span>20 học viên</span>
            </div>
          </div>
          <div className="progression-bar">
            <div className="bar">
              <div className="inner-bar"></div>
            </div>
            <span>30%</span>
          </div>
          <a className="round-btn">tiếp tục học</a>
        </div>
      </div>
      <div className="course-card">
        <div className="img-container">
          <img src="/img/c_grunt.jpg" alt="" />
        </div>
        <div className="course-card__content">
          <h5>front-end căng bản</h5>
          <p>Khai giảng ngày 09/09/2019</p>
          <div className="icon-info">
            <div className="icon-info__item">
              <div className="icon-container">
                <img src={clock} alt="" />
              </div>
              <span>54 giờ</span>
            </div>
            <div className="icon-info__item">
              <span>25 video</span>
            </div>
            <div className="icon-info__item">
              <div className="icon-container">
                <img src={user} alt="" />
              </div>
              <span>20 học viên</span>
            </div>
          </div>
          <div className="progression-bar">
            <div className="bar">
              <div className="inner-bar"></div>
            </div>
            <span>30%</span>
          </div>
          <a className="round-btn">tiếp tục học</a>
        </div>
      </div>
    </div>
  );
}
