"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import Form from "../Component2/form";
import { FaRegFileLines } from "react-icons/fa6";
import "./style.scss";
import Task from "../Task";


const Add = ({ setTasks, tasks }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(null);
  const [updateValue, setUpdateValue] = useState(null);

  // this is click function to open form when click on create new task.
  const clickToOpen = () => {
    setUpdateValue(null); //this is null or not provided as when we add new task we does not need old.
    setIsFormOpen(true); // to open form
  };

  const onEdit = (task) => {
    setUpdateValue(task); //this is on edit it update the value.
    setIsFormOpen(true);
  };

  const clickToPop = (id) => {
    setIsPopOpen((prev) => (prev === id ? null : id));
  };


  useEffect(() => {
    if (updateValue) {//here update value is for to open the updated value .
      setIsFormOpen(true);//form open.
    } else {//this if update value is not there.thats means when click on create new where update value is not needed.
      setIsFormOpen(false);
    }
  }, [updateValue, isFormOpen]);

  return (
    <div>
      {/* task component where task is mappped */}
      <Task tasks={tasks} setTasks={setTasks} clickToPop={clickToPop} isPopOpen={isPopOpen} onEdit={onEdit} />

      {/* this is button which has create new */}
      <div className="add_task">

        {/* this is where i click to get the open form. */}
        <div className="add_title" onClick={clickToOpen}>
          <p>
            <FaPlus />
          </p>
          <p>Create new Task</p>
        </div>
        <div className="icons">
          <div className="command-icon">
            <Image src="/command1.png" alt="command icon" width={16} height={16} />
          </div>
          <div className="command-ico">N</div>
        </div>
      </div>
      <div className="last_icon">
        <FaRegFileLines />
      </div>

      {/* this is form component. which help to open here the props is passed to form component. */}
      {isFormOpen && (
        <div className="form">
          <Form setTasks={setTasks}
            tasks={tasks}
            setIsFormOpen={setIsFormOpen}
            updateValue={updateValue}
          />
        </div>
      )}
    </div>
  );
};

export default Add;
