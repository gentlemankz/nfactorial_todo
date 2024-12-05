'use client';

export default function Pager({ activeButton, setActiveButton }) {
  const getButtonClass = (buttonType) => {
    const baseClass = "w-[87px] h-10 rounded-[38px] transition-colors duration-300 ease-in-out";
    return `${baseClass} ${activeButton === buttonType ? 'bg-slate-500 text-white' : 'bg-white text-black hover:bg-slate-200'}`;
  };

  return (
    <div className="flex flex-start ml-20 mt-[102px]">
      <div className="flex flex-row gap-4 font-medium">
        <button 
          className={getButtonClass('todo') }
          onClick={() => setActiveButton('todo')}
        >
          To Do
        </button>
        <button 
          className={getButtonClass('done')}
          onClick={() => setActiveButton('done')}
        >
          Done
        </button>
        <button 
          className={getButtonClass('trash')}
          onClick={() => setActiveButton('trash')}
        >
          Trash
        </button>
      </div>
    </div>
  );
}
