"use client"
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { taskService } from "@/services/api";
import { useRouter } from "next/navigation";
import ItemList from "@/components/ItemList";
import Pager from "@/components/Pager";
import PlusButton from "@/components/PlusButton";
import SectionName from "@/components/SectionName";
import TitleMain from "@/components/TitleMain";
import AddDialog from "@/components/AddDialog";
import Footer from "@/components/Footer";

export default function Dashboard() {
    const { user, isAuthenticated, loading: authLoading, logout } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [activeButton, setActiveButton] = useState('todo');
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            router.push('/login');
        } else if (isAuthenticated) {
            fetchTasks();
        }
    }, [isAuthenticated, authLoading, router]);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await taskService.getTasks();
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const addTask = async (newTaskText) => {
        try {
            const response = await taskService.createTask({ text: newTaskText });
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }

    const updateTask = async (taskId, newState) => {
        try {
            if (newState.isDeleted) {
                await taskService.deleteTask(taskId);
                setTasks(tasks.filter(task => task._id !== taskId));
            } else {
                const response = await taskService.updateTask(taskId, newState);
                setTasks(tasks.map(task => 
                    task._id === taskId ? response.data : task
                ));
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }

    if (authLoading || loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return(
        <div>
            <TitleMain />
            <div className="flex justify-between items-center px-20">
                <div>Welcome, {user?.name}</div>
                <button 
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
            <PlusButton onCLick={openModal} />
            <Pager activeButton={activeButton} setActiveButton={setActiveButton} />
            <SectionName activeButton={activeButton} />
            <ItemList tasks={tasks} activeButton={activeButton} updateTask={updateTask} />
            {isModalOpen && <AddDialog onClose={closeModal} onAddTask={addTask}/>}
            <Footer />
        </div>
    );
}