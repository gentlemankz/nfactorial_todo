export default function SectionName({ activeButton }) {
    const getSectionTitle = () => {
        switch(activeButton) {
            case 'done':
                return 'Done';
            case 'trash':
                return 'Trash';
            default:
                return 'To Do';
        }
    };

    return (
        <div>
            <div className="flex flex-col mx-[80px] mt-16">
                <h2 className="m-0 p-0 font-bold text-3xl">{getSectionTitle()}</h2>
                <hr className="my-12 h-0.5 border-t-0 bg-[rgb(21,21,23)] opacity-20" />
            </div>
        </div>
    );
}