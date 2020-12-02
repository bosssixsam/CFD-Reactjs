import React from "react";
import Card from "../../../components/Card";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="content-head">
          <span>khóa học</span>
          <h3>online</h3>
        </div>

        <div className="card-container">
          <Card
            name="Front-end căn bản"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="React JS"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="Animation"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="Scss, Grunt JS và Bootstrap 4"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="UX/UI Design"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
          <Card
            name="Web Responsive"
            content="One of the best corporate fashion brands in Sydney"
            author="Trần Nghĩa"
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
