import { useState } from "react";

export default function AddDialog({ onClose, onAddTask }) {
    const handleBackgroundClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    const [taskText, setTaskText] = useState('');

    const handleAddClick = () => {
        if (taskText.trim()) {
            onAddTask(taskText);
            setTaskText('');
            onClose();
        }
    }
  
    return (
      <div
        className="fixed inset-0 flex justify-end"
        onClick={handleBackgroundClick}
      >
        <div className="flex flex-col justify-center items-center m-4 w-[268px] h-[234px] rounded-xl bg-[rgb(228,230,231)] mr-[157px] mt-[92px] ">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-lg font-bold">Add New To Do</h2>
            <input
              type="text"
              className="w-[236px] h-[120px] rounded-lg"
              placeholder="Your Text"
              onChange={(e) => setTaskText(e.target.value)}
            />
            <button
              className="w-[76px] h-10 rounded-3xl text-white bg-[rgb(8,30,52)]"
              onClick={handleAddClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  