import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [cate, setCate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cate")
      .then((res) => res.json())
      .then((data) => setCate(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      {cate.map((cat) => (
        <p key={cat.id}>
          <Link
            className="text-decoration-none text-bold"
            to={`/cate/${cat.id}`}
          >
            {cat.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
