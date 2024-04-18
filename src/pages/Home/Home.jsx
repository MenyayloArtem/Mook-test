import React, { useEffect, useState } from "react";
import "../../App.scss";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import "./Home.scss";
import usePrevNavigate from "../../hooks/usePrevNavigate";

function Home({ auth = false }) {
  const [showForm, setShowForm] = useState(false);
  const navigate = usePrevNavigate();

  return (
    <div className="Home">
      <Modal
        onClose={() => setShowForm(false)}
        onSignIn={() => navigate("/images")}
        show={showForm}
      />

      <header className="header">
        <h2 className="Home__title">OneAI</h2>
        {!auth && (
          <button className="signin" onClick={() => setShowForm(true)}>
            Sign In
          </button>
        )}
      </header>
      <main className="Home__content">
        <Card />
        <Card />
      </main>
      <footer className="footer">
        <div className="text bold">Get help at support@avgen.me</div>
        <div className="text copyright">
          Copyright © 2024 Mook Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
