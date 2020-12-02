import React from "react";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="title">
          <h2 className="main-title">
            những điều
            <br />
            <span>đặc biệt</span> tại cfd
          </h2>
          <div className="title__img">
            <div className="img-container">
              <img src="./img/special1.jpg" alt="" />
            </div>
            <div className="img-container --bot">
              <img src="./img/special2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="info__content">
          <div className="info__content__item">
            <h6>không cam kết đầu ra</h6>
            <p>
              Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như cả
              người hướng dẫn và người học không thật sự tâm huyết và cố gắng.
              Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các thành viên tạo ra
              sản phẩm có giá trị, thay vì cam kết.
            </p>
          </div>
          <div className="info__content__item">
            <h6>Không chỉ là một lớp học</h6>
            <p>
              VCFD không phải một lớp học thuần túy, tất cả thành viên là một
              team, cùng hổ trợ, chia sẻ và giúp đỡ nhau trong suốt quá trình
              học và sau này, với sự hướng dẫn tận tâm của các thành viên đồng
              sáng lập CFD.
            </p>
          </div>
          <div className="info__content__item">
            <h6>không để ai bỏ lại phía sau</h6>
            <p>
              Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ được
              đội ngũ CFD kèm cặp đặc biệt, cùng sự hổ trợ từ các thành viên
              khác trong team. Vì mục tiêu cuối cùng là hoàn thành khóa học thật
              tốt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
