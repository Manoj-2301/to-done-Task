import "./style.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormModal = ({ setTasks, tasks, setIsFormOpen }) => {
  const schema = yup.object().shape({
    task: yup.string().required(),
    emoji: yup.string(),
    start: yup.string(),
    end: yup.string(),
    extra: yup.string(),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (newData) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...newData };
    setTasks([...tasks, newTask]);
    setIsFormOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form className="form_field" onSubmit={handleSubmit(onSubmit)}>
          <div className="task-field">
            <div className="task_entery">
              <label>Enter Task</label>
              <input type="text" placeholder="Enter Task" {...register("task")} />
            </div>
            <div className="task_entery">
              <label>Enter emoji</label>
              <input type="text" placeholder="add emoji/work" {...register("emoji")} />
            </div>
          </div>
          <div className="task-field">
            <div className="task_entery">
              <label>Enter start Time</label>
              <input type="time" {...register("start")} />
            </div>
            <div className="task_entery">
              <label>Enter end Time</label>
              <input type="time" {...register("end")} />
            </div>
          </div>
          <div className="task_entery">
            <label>Enter purpose</label>
            <input type="text" placeholder="purpose" {...register("extra")} />
          </div>
          <button type="submit" className="btn_form">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
