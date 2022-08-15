import React from "react";
import MyButton from "./UI/Button/MyButton";

const TableItem = (props) => {
    return (
      <div className="p-3 border rounded my-2 d-flex justify-content-between align-items-center">
        <div>
          <span className="fw-bold">{props.post.id}. 
            <b className="text-capitalize"> {props.post.title}</b>
          </span>
          <p>{props.post.body}</p>
        </div>
        <p>
          <MyButton onClick={() => props.remove(props.post)} className="btn btn-outline-danger w-100">
            Delete
          </MyButton>
        </p>
      </div>
    );
};

export default TableItem