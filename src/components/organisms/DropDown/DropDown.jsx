import React from 'react'
import { useNavigate } from 'react-router-dom';
import './DropDown.scss';
const DropDown = ({categories}) => {
    let navigate = useNavigate();
  const handleCategoryChange=(event)=>{
    navigate(`/products/?category=${event.target.value}`);
  }
  let options=null;
  if (categories != null){
  options=categories.map((option)=>{
    return <option className='dropDownOptions' key={option.id}value={option.id}>{option.name}</option>
  })}
  return (
    <select className="dropDown" onChange={handleCategoryChange}>
      {options}
  </select>
  )
}

export default DropDown