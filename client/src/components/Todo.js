import React, { useState,useEffect } from "react";

const Todo = () => {
 
  const [title, setTitle] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { title };
      const response = await fetch("http://localhost:5000/todo/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {

      console.error(err.message);
    }
  };

	return (
		<div>
			<form className="d-flex mt-5" onSubmit={onSubmitForm}>
				<input type="text" className="priority" />
				<input type="text" className="form-control desc"  value={title}
          onChange={e => setTitle(e.target.value)}/>
				<button className="btn btn-success addbttn">Add</button>
			</form>
		</div>
	);
};

export default Todo;
