"use client"
import "./style.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import {useState} from "react"
const Task = ({ tasks,setTasks }) => {
  const [isPopOpen, setIsPopOpen] = useState(null);

  const Delete =  (id) => {
    // await fetch(`https://678f25af49875e5a1a90af20.mockapi.io/Users/${id}`,{
    //   method:'DELETE',
    // })
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleHandle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, strike: !task.strike } : task
      )
    );
  };
  const clickToPop= (id) => {
    setIsPopOpen(isPopOpen === id ? null:id);

  };

  return (
    <div className="task_content">
      {tasks.map((task) => (
        <div key={task.id} className="task_box">
          <div className="task_add">
            <input type="checkbox" className="check"
            checked={task.strike || false}
            onChange={()=>toggleHandle(task.id)} />
            <p className={`strip ${task.strike ? "strike": ""}`}>{task.task}</p>
            {task.emoji && <p className="fav_icon">{task.emoji}</p>}
           {task.extra && <p className="type">{task.extra}</p>}
          </div>
          <div className="task_time">
            <p className="time">
              <IoTimeOutline />
              {task.start} - {task.end}
            </p>
            <button className="dot_btn" onClick={()=>clickToPop(task.id)}>
              <BsThreeDotsVertical />
            </button>
          {isPopOpen === task.id && (<div className="edit_pop">
            <p className="edit" >Edit</p>
            <p className="delete" onClick={() => Delete(task.id)}>Delete</p>
          </div>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
