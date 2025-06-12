import React from "react";

const Home = () => {
  return (
    <main className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 my-5">
      <section className="text-lg-start text-center flex-fill">
        <h1 className="display-4 fw-bold text-primary">KYOSEI ACCESIBILIDAD</h1>
        <p className="lead text-dark">
          Trabajando para vivir en un mundo más accesible.
        </p>
      </section>

      <section className="flex-fill text-center">
        <img
          src="../src/assets/braille.jpg"          alt="Persona leyendo en Braille"
          className="img-fluid rounded"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </section>
    </main>
  );
};

export default Home;