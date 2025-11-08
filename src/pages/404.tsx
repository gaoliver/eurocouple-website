import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img src="/images/eurocouple_badget.png" alt="Logo" style={{ width: "150px", marginBottom: "20px" }} />
      <h1
        style={{
          textAlign: "center",
          marginTop: "10vh",
          color: "var(--green-900",
        }}
      >
        404 - Página não encontrada
      </h1>
      <p style={{ textAlign: "center", color: "var(--green-700" }}>
        A página que você está procurando não existe.
      </p>
    </div>
  );
};

export default NotFound;
