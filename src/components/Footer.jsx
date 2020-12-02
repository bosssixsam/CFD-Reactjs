import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="mainfooter">
          <div className="basic">
            <h5>
              Sáng tạo, tinh tế và phù hợp sẽ khiến sản phẩm của bạn trở nên
              khác biệt
            </h5>
            <p>Số 11, Phan Kế Bính, Quận 1, Tp.Hồ Chí Minh</p>
            <span>(+84) 98 9596 913</span>
            <div className="icons">
              <div className="icon-container">
                <img src="./img/icons/facebook_icon.svg" alt="" />
              </div>
              <div className="icon-container">
                <img src="./img/icons/mail_icon.svg" alt="" />
              </div>
              <div className="icon-container">
                <img src="./img/icons/skype_icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="footer-navigation">
            <nav>
              <a href="">Trang chủ</a>
              <a href="">Khóa học</a>
              <a href="">Thanh toán</a>
              <a href="">Điều khoản</a>
            </nav>
            <div className="totop">
              <div className="line"></div>
              <span>cuộn lên</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rights">
        <span>2020 Creative Front-End Dev</span>
        <span>Được thiết kế và lập trình bởi CFD Team</span>
      </div>
    </footer>
  );
}
