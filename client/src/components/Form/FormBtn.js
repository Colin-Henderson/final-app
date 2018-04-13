import React from "react";

export const FormBtn = props => (
  <button {...props} style={{color:"black", width: "100%", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
