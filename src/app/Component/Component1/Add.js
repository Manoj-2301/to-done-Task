"use client";
import { useState } from "react";
import Image from "next/image"; // Correct import
import { FaPlus } from "react-icons/fa";
import Form from "../Component2/form";
import { FaRegFileLines } from "react-icons/fa6";

import "./style.scss";

const Add = ({ setTasks, tasks }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const clickToOpen = () => {
    setIsFormOpen((addform) => !addform);
  };


  return (
    <div>
      <div className="add_task" >
        <div className="add_title" onClick={clickToOpen}>
          <p>
            <FaPlus />
          </p>
          <p  >Create new Task</p>
        </div>
        <div className="icons">
          <div className="command-icon">
            <Image
              src="/command1.png"
              alt="command icon"
              width={16}
              height={16}
            />
          </div>
          <div className="command-ico">N</div>
        </div>
      </div>
      <div className="last_icon">
        <FaRegFileLines />

      </div>
      {isFormOpen && (
        <div className="form">
          <Form setTasks={setTasks} tasks={tasks} setIsFormOpen={setIsFormOpen}  />
        </div>
      )}
    </div>
  );
};

export default Add;
