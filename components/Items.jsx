import Icon from "./Icon";
import { motion } from "framer-motion";
import { useState } from "react";
import AdditinalDialog from "./AdditinalDialog";

export default function Items({ task, updateTask }) {
    const [showModal, setShowModal] = useState(false);

    const handleIconClick = () => {
        updateTask(task.text, { isCompleted: !task.isCompleted });
    };

    const handleDelete = () => {
        updateTask(task.text, { isTrash: true });
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
                <button onClick={() => setShowModal(!showModal)}>
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
                {!task.isTrash && (
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
            {showModal && (
                <div className="absolute left-0 top-full mt-2 z-50">
                    <AdditinalDialog onClose={() => setShowModal(false)} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
}
