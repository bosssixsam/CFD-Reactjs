import React from "react";

//-- icons ---
import doublequote from "../../../icons/double-quotes 1.svg";
import fbicon from "../../../icons/facebook_icon.svg";
import pre from "../../../icons/pre.svg";
import next from "../../../icons/next.svg";

const Testomonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="content-head">
          <span>cảm nhận</span>
          <h3>thành viên</h3>
        </div>
        <div className="slider">
          <div className="content">
            <div className="decor-container">
              <img src={doublequote} alt="" />
            </div>

            <div className="name">
              <h5>Tiến Tài</h5>
              <span>Thành viên CFD1</span>
            </div>
            <p>
              Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
              front-end qua khóa học. Like cho 4 mentor.
            </p>
            <div className="bottom">
              <div className="icon-container">
                <img src={fbicon} alt="" />
              </div>
              <p>08/09/2020</p>
            </div>
          </div>
          <div className="slider-container">
            <div className="slider__item">
              <img src="./img/avatar1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="control">
          <div className="control__btn pre">
            <div className="icon-container">
              <img src={pre} alt="" />
            </div>
          </div>
          <div className="control__btn next">
            <div className="icon-container">
              <img src={next} alt="" />
            </div>
          </div>
        </div>
        <div className="paging">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Testomonial;
