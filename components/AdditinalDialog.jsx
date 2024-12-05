export default function AdditinalDialog({ onDelete }) {
    return (
        <div 
            className="flex justify-start items-center w-[240px] h-[48px] bg-[rgb(228,230,231)] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.16)] cursor-pointer"
            onClick={onDelete}
        >
            <div className="flex justify-center items-center w-10 h-10">
                <img src="/trash.png" alt="trash" className="w-8 h-8 p-1" />
            </div>
            <p className="text-sm ml-2">Move to Trash</p>
        </div>
    );
}
