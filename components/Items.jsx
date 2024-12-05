import { useState } from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";

export default function Items({ task, onStateChange }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [currentState, setCurrentState] = useState("todo"); // States: todo, done, trash

    const handleIconClick = () => {
        setIsCompleted(!isCompleted);
        if (!isCompleted) {
            setCurrentState("done");
            onStateChange && onStateChange(task, "done");
        } else {
            setCurrentState("todo");
            onStateChange && onStateChange(task, "todo");
        }
    };

    const handleDelete = () => {
        setCurrentState("trash");
        onStateChange && onStateChange(task, "trash");
    };

    return (
        <motion.div 
            className="flex flex-row items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
        >
            <button>
                <img 
                    src="/vector.png" 
                    className="w-[2.5px] h-[10px]"
                    alt="" 
                />
            </button>
            <div>
                <Icon onClick={handleIconClick} isCompleted={isCompleted} />
            </div>
            <h2
                className={`flex-grow ${
                    isCompleted ? "line-through text-gray-400" : "text-black"
                } transition-all duration-300`}
            >
                {task}
            </h2>
            {currentState !== "trash" && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-600 px-2"
                >
                    🗑️
                </motion.button>
            )}
        </motion.div>
    );
}
