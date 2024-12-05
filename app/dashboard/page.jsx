"use client"
import ItemList from "@/components/ItemList";
import Pager from "@/components/Pager";
import PlusButton from "@/components/PlusButton";
import SectionName from "@/components/SectionName";
import TitleMain from "@/components/TitleMain";
import { useState } from "react";
import AddDialog from "@/components/AddDialog";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [activeButton, setActiveButton] = useState('todo');

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const addTask = (newTask) => {
        setTasks([...tasks, { 
            text: newTask, 
            isCompleted: false, 
            isTrash: false 
        }]);
    }

    const updateTask = (taskText, newState) => {
        setTasks(prevTasks => {
            if (newState.isDeleted) {
                // Remove task permanently
                return prevTasks.filter(task => task.text !== taskText);
            }
            // Update task state
            return prevTasks.map(task => 
                task.text === taskText 
                    ? { ...task, ...newState }
                    : task
            );
        });
    }

    return(
        <div>
            <TitleMain />
            <PlusButton onCLick={openModal} />
            <Pager activeButton={activeButton} setActiveButton={setActiveButton} />
            <SectionName />
            <ItemList tasks={tasks} activeButton={activeButton} updateTask={updateTask} />
            {isModalOpen && <AddDialog onClose={closeModal} onAddTask={addTask}/>}
        </div>
    );
}