"use client"
import "./style.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react"


const FormModal = ({ setTasks, tasks, setIsFormOpen,updateValue,setFormEdit }) => {
  const schema = yup.object().shape({
    task: yup.string().required(),
    emoji: yup.string(),
    start: yup.string(),
    end: yup.string(),
    extra: yup.string(),
  });

  const { register, handleSubmit,setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (updateValue){
      setValue("task", updateValue.task);
      setValue("emoji", updateValue.emoji);
      setValue("start", updateValue.start);
      setValue("end", updateValue.end);
      setValue("extra", updateValue.extra);
      }
   }, []);
  
  const onSubmit = (newData) => {
    if(updateValue){
      const Updated = tasks.map((task) =>
        task.id === updateValue.id ? { ...task} : task);
      setTasks(Updated);
      setFormEdit(false)
    }
    else{      
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...newData };
    setTasks([...tasks, newTask]);
    setIsFormOpen(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form className="form_field" onSubmit={handleSubmit(onSubmit)}>
          <div className="task-field">
            <div className="task_entery">
              <label>Enter Task</label>
              <input type="text" placeholder="Enter Task" name="task"{...register("task")} />
            </div>
            <div className="task_entery">
              <label>Enter emoji</label>
              <input type="text" placeholder="add emoji/work" name=" emoji"{...register("emoji")} />
            </div>
          </div>
          <div className="task-field">
            <div className="task_entery">
              <label>Enter start Time</label>
              <input type="time" name="start" {...register("start")} />
            </div>
            <div className="task_entery">
              <label>Enter end Time</label>
              <input type="time" name="end" {...register("end")} />
            </div>
          </div>
          <div className="task_entery">
            <label>Enter purpose</label>
            <input type="text" placeholder="purpose" name {...register("extra")} />
          </div>
          <button type="submit" className="btn_form">
          {updateValue ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
