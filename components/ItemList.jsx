import { v4 as uuidv4 } from 'uuid';
import Items from "./Items";

export default function ItemList({ tasks, activeButton, updateTask }) {
    
    const filteredTasks = tasks.filter(task => {
        switch(activeButton) {
            case 'todo':
                return !task.isCompleted && !task.isTrash;
            case 'done':
                return task.isCompleted && !task.isTrash;
            case 'trash':
                return task.isTrash;
            default:
                return true;
        }
    });

    return (
        <div className="flex flex-col ml-[56px] mt-6 gap-4">
            {filteredTasks.map((task) => (
                <Items 
                    key={uuidv4()} 
                    task={task} 
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
}
