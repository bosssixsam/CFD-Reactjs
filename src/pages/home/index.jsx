import React, { useState } from "react";

const Home = ({ label, name }) => {
  const [state, setstate] = useState("");

  return (
    <section className="home">
      <h2>
        Home, {label}
        <br />
        {name}
      </h2>
    </section>
  );
};

export default Home;
