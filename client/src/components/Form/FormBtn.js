import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 50 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}
