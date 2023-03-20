import { Task } from "./Task";

export function TaskList() {
  return (
    <div>
        <Task 
          description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." 
          isDone={false} 
        />
        <Task 
          description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." 
          isDone={true} 
        />
    </div>
  );
}