import Items from "./Items";

export default function ItemList({ tasks }) {
    return (
        <div className="flex flex-col ml-[56px] mt-6 gap-4">
            {tasks.map((task, index) => (
                <Items key={index} task={task} />
            ))}
        </div>
    );
}
