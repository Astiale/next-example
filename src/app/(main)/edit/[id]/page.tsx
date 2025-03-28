import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

const getTask = async(id:string):Promise<TaskDocument> => {
    const response = await fetch(`${process.env.API_URI}/tasks/${id}`, {
        cache: "no-store",
  })
  const data = await response.json();
  console.log(data.task);
  return data.task as TaskDocument;
}

const EditTaskPage = async (props: {params: Promise<{id:string}>}) => {
    const params = await props.params;
    const task = await getTask(params.id);
    
    return (
        <div className="flex flex-col justify-center p-20">
        <h2 className="text-center text-2xl font-bold">Edit Task</h2>
        <EditTaskForm task = {task} />
    </div>
    )
}

export default EditTaskPage