export default function AdditinalDialog({ onDelete, onMoveBack, isTrash }) {
    return (
        <div className="flex flex-col gap-2 w-[240px] p-2 bg-[rgb(228,230,231)] rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.16)]">
            <div 
                className="flex justify-start items-center h-[48px] hover:bg-gray-200 rounded-lg cursor-pointer"
                onClick={onDelete}
            >
                <div className="flex justify-center items-center w-10 h-10">
                    <img src="/trash.png" alt="trash" className="w-8 h-8 p-1" />
                </div>
                <p className="text-sm ml-2">{isTrash ? "Delete Forever" : "Move to Trash"}</p>
            </div>
            {isTrash && (
                <div 
                    className="flex justify-start items-center h-[48px] hover:bg-gray-200 rounded-lg cursor-pointer"
                    onClick={onMoveBack}
                >
                    <div className="flex justify-center items-center w-10 h-10">
                        <img src="/move.png" alt="move" className="w-8 h-8 p-1" />
                    </div>
                    <p className="text-sm ml-2">Move Back To To Do</p>
                </div>
            )}
        </div>
    );
}
