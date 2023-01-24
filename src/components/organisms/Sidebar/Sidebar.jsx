import React from "react";
import {Link, NavLink } from "react-router-dom";
import useFetch from "../../../useFetch";
import "./sideBar.scss";
const Sidebar = ({categories}) => {
  
  let categoryNames = null;
  if (categories != null) {
    categoryNames = categories.map((category) => {
      //    div will be replaced by link
      return (
        <div className="categoryList" key={category.id}>
        <Link className="categorySorting" to={`?category=${category.id}`}>
          <div>{category.name}</div>
        </Link>
        </div>
      );
    });
  }
  return <aside className="sideBar">{categoryNames}</aside>;
};

export default Sidebar;
