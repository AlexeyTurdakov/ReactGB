import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h2>not found page</h2>
      <Link to={"/"}>Main Page</Link>
    </div>
  );
};

export default NotFoundPage;
