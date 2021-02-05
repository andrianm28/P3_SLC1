import React from "react";
import { useHistory, Link } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  function toCreateForm() {
    console.log("masuk");

    history.push("/create-task");
  }

  return (
    <>
      <div className="">
        <h1> Task Management </h1>
        <button onClick={() => toHome()}>Task List</button> <br />
        <button onClick={() => toCreateForm()}>Create Task</button>
      </div>
    </>
  );
};

export default SideBar;
