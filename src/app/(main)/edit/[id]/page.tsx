import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";

interface Params {
    params: { id: string; }
}

const EditTaskPage = () => {
    return (
        <div className="flex flex-col justify-center p-20">
        <h2 className="text-center text-2xl font-bold">Create New Task</h2>
        <EditTaskForm/>
    </div>
    )
}

export default EditTaskPage