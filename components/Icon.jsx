
export default function Icon({ onClick, isCompleted }) {
  return (
    <div
      className="w-6 h-6 flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-4 h-4 box-border rounded-[4px] flex justify-center items-center ${
          isCompleted
            ? "bg-[#712FFF]"
            : "border-[1.4px] border-gray-400"
        }`}
      >
        {isCompleted && <img className="w-[10px] h-[7.62px]"  src="/vector2.png" alt="completed" />}
      </div>
    </div>
  );
}
