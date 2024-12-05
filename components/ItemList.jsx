import Items from "./Items";

export default function ItemList({ tasks, activeButton, updateTask }) {
    // Log tasks for debugging
    console.log('Tasks:', tasks);
    console.log('Active Button:', activeButton);

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

    // Log filtered tasks for debugging
    console.log('Filtered Tasks:', filteredTasks);

    return (
        <div className="flex flex-col ml-[56px] mt-6 gap-4">
            {filteredTasks.map((task, index) => (
                <Items 
                    key={index} 
                    task={task} 
                    updateTask={updateTask}
                />
            ))}
        </div>
    );
}
