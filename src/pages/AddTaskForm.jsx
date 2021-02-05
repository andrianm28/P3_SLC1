import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTasks } from "../stores/actions/tasks";

const AddTaskForm = () => {
  //const {tasks} = useSelector(state => state)
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function addTask() {
    const sent = {
      category,
      title
    };
    if (!title) {
      setError(true);
    } else {
      dispatch(addTasks(sent));
    }
  }

  return (
    <>
      <div>
        <h1>Create Task</h1>
        {error ? (
          <h1
            style={{
              color: "red"
            }}
          >
            WOWOWOWOWO ERROR
          </h1>
        ) : (
          <></>
        )}
        <label htmlFor=""> Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disable value="">
            All
          </option>
          <option value="Frontend">Front End</option>
          <option value="Backend">Back End</option>
          <option value="Mobile">Mobile</option>
        </select>
        <br />
        <label htmlFor=""> Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => addTask()}>Add Task</button>
      </div>
    </>
  );
};

export default AddTaskForm;
