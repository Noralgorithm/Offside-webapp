import React from "react";
import { Link } from "react-router-dom";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <main>
      <h1 className={styles.homepage}>
        home c: <br />
        <Link to="/signup">registrate mi loco</Link>
        <br />o
        <br />
        <Link to="/login">logueate 🥔</Link>
        <br />
      </h1>
    </main>
  );
};

export default Homepage;
