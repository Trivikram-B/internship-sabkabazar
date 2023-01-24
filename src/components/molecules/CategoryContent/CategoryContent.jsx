
import React from "react";
import { Link, NavLink } from "react-router-dom";
import RectangleButton from '../../atoms/Buttons/RectangleButton/RectangleButton';
import './CategoryContent.scss';



const Category = ({
  className,
  heading,
  text,
  button,
  id
}) => {


  return (

    <div className={`${className} content`}>
      <h2 className="contentHeader">{heading}</h2>
      <p className="contentText">{text}</p>
      <Link className="categorySorting" to={`products?category=${id}`}>
        <div className="buttonStyling">
        <RectangleButton >Explore {button}</RectangleButton>
        </div>
      </Link>
    </div>
  );
};

export default Category;
