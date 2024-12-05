export default function PlusButton({onCLick}) {
    return(
        <div className="flex justify-end mt-[90px] mr-[80px]">
            <button 
            className="flex w-[52px] h-[52px] justify-center items-center rounded-full bg-black"
            onClick={onCLick}
            >
                <img className="w-6 h-6" src="/PlusMath.png" alt="+" />
            </button>
        </div>
    );
}