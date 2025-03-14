import TaskCard from "@/components/TaskCard/TaskCard"

const CompeletedTaskPage = () => {
    return (
        <div className="text-gray-800 p-8 h-full overflow-auto pb-24">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center">Compeleted Tasks</h1>
            </header>
            <div className="mt-8 flex flex-wrap gap-4">
                <TaskCard />
            </div>
        </div>
    )
}

export default CompeletedTaskPage