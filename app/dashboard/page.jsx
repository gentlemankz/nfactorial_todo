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

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }
    return(
        <div>
            <TitleMain />
            <PlusButton onCLick={openModal} />
            <Pager />
            <SectionName />
            <ItemList tasks={tasks} />
            {isModalOpen && <AddDialog onClose={closeModal} onAddTask={addTask}/>}
        </div>
    );
}