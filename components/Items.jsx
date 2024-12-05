import Icon from "./Icon";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import AdditinalDialog from "./AdditinalDialog";

export default function Items({ task, updateTask }) {
    const [showDialog, setShowDialog] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                setShowDialog(false);
            }
        }

        if (showDialog) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDialog]);

    const handleIconClick = () => {
        updateTask(task.text, { isCompleted: !task.isCompleted });
    };

    const handleDelete = () => {
        if (task.isTrash) {
            updateTask(task.text, { isDeleted: true });
        } else {
            updateTask(task.text, { isTrash: true });
        }
        setShowDialog(false);
    };

    const handleMoveBackToTodo = () => {
        updateTask(task.text, { isTrash: false });
        setShowDialog(false);
    };

    return (
        <div className="relative">
            <motion.div 
                className="flex flex-row items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
            >
                <button onClick={() => setShowDialog(!showDialog)}>
                    <img 
                        src="/vector.png" 
                        className="w-[2.5px] h-[10px]"
                        alt="" 
                    />
                </button>
                <div>
                    <Icon onClick={handleIconClick} isCompleted={task.isCompleted} />
                </div>
                <h2
                    className={`flex-grow ${
                        task.isCompleted ? "line-through text-gray-400" : "text-black"
                    } transition-all duration-300`}
                >
                    {task.text}
                </h2>
            </motion.div>
            {showDialog && (
                <div ref={dialogRef} className="absolute left-0 top-full mt-2 z-50">
                    <AdditinalDialog 
                        onDelete={handleDelete}
                        onMoveBack={handleMoveBackToTodo}
                        isTrash={task.isTrash}
                    />
                </div>
            )}
        </div>
    );
}
