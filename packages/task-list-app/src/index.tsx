import {FC} from "react";
import {Task} from "@monorepo/types";
import TaskList from "./components/TaskList";

type Props = {
    tasks: Task[];
    onToggleComplete: (id: number) => void;
    onDeleteTask: (id: number) => void;
};

const TaskListApp: FC<Props> =  ({ tasks,
                                     onToggleComplete,
                                     onDeleteTask, }) =>{
  return (
    <div>
      <TaskList tasks={tasks}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default TaskListApp;
