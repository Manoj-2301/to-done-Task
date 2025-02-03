"use client"
import "./style.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { useState } from "react"
import FormModal from "./Component2/form";
const Task = ({ tasks, setTasks,text }) => {
  const [isPopOpen, setIsPopOpen] = useState(null);
  const [formEdit, setFormEdit] = useState(false);
  const [updateValue, setUpdateValue] = useState();


  const Delete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleHandle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, strike: !task.strike } : task
      )
    );
  };
  const clickToPop = (id) => {
    setIsPopOpen(isPopOpen === id ? null : id);
  };
  const onEdit = () => {
    setFormEdit((formEdit) => !formEdit)
    setUpdateValue(tasks)
  }


  return (
    <div className="task_content">
      {tasks.map((task) => (
        <div key={task.id} className="task_box">
          <div className="task_add">
            <input type="checkbox" className="check"
              checked={task.strike || false}
              onChange={() => toggleHandle(task.id)} />
            <p className={`strip ${task.strike ? "strike" : ""}`}>{task.task}</p>
            {task.emoji && <p className="fav_icon">{task.emoji}</p>}
            {task.extra && <p className="type">{task.extra}</p>}
          </div>
          <div className="task_time">
            <p className="time">
              <IoTimeOutline />
              {task.start} - {task.end}
            </p>
            <button className="dot_btn" onClick={() => clickToPop(task.id)}>
              <BsThreeDotsVertical />
            </button>
            {/* edit form  */}
            {formEdit && (<FormModal setTasks={setTasks} tasks={tasks} updateValue={updateValue} text="Edit" />)}

            {isPopOpen === task.id && (<div className="edit_pop">
              <p className="edit" onClick={onEdit} >Edit</p>
              <p className="delete" onClick={() => Delete(task.id)}>Delete</p>
            </div>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
