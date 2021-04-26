import React from "react";
import './label.css';


 const label =({text})=>{
  return (
    <div className="label">
      <label text>{text}</label>
    </div>
  );
}
export default label;