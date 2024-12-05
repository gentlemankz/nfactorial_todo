export default function Pager() {
  return (
    <div className="flex flex-start ml-20 mt-[102px]">
      <div className="flex flex-row gap-4">
        <button className="w-[87px] h-10 rounded-[38px] bg-slate-500">To Do</button>
        <button className="w-[87px] h-10 rounded-[38px] bg-white">Done</button>
        <button className="w-[87px] h-10 rounded-[38px] bg-white">Trash</button>
      </div>
    </div>
  );
}
