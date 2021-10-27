import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../../../redux/tasks/tasksActions";

const DiaryAddProductForm = () => {
  const [taskName, setTaskName] = useState("");
  const [details, setDetails] = useState("");
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const onHandleChange = ({ target }) => {
    const { value, name } = target;
    name === "taskName" && setTaskName(value);
    name === "done" && setDone((prev) => !prev);
    name === "details" && setDetails(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // ================
    dispatch(addTasks({ taskName, done, details }));
    setTaskName("");
    setDetails("");
    setDone(false);
    return (
            <form onSubmit={onHandleSubmit}>
      <label>
        TaskName:
        <input
          type='text'
          name='taskName'
          value={taskName}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Details:
        <input
          type='text'
          name='details'
          value={details}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Done:
        <input
          type='checkbox'
          name='done'
          checked={done}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Add task</button>
    </form>
    );
}

export default DiaryAddProductForm;




