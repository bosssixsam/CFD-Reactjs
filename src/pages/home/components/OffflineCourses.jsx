import React from "react";
import Card from "../../../components/Card";

const OfflineCourses = () => {
  return (
    <section className="courses offline">
      <div className="container">
        <div className="content-head">
          <span>khóa học</span>
          <h3>offline</h3>
        </div>

        <div className="card-container">
          <Card
            name="Front-end căn bản"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="Front-end căn bản"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="Front-end căn bản"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
        </div>
      </div>
    </section>
  );
};

export default OfflineCourses;
