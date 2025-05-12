import TaskInputForm from "./components/TaskInputForm";
import {FC} from "react";

type Props = {
    onAddTask: (task: string) => void;
}

const TaskFormApp: FC<Props> = ({ onAddTask }) =>{
  return (
    <div>
      <TaskInputForm onAddTask={onAddTask} />
    </div>
  );
}

export default TaskFormApp;
