import NewTaskForm from "@/components/NewTaskForm/NewTaskForm"

const NewTaskPage = () => {
  return (
    <div className="flex flex-col justify-center p-20">
        <h2 className="text-center text-2xl font-bold">Create New Task</h2>
        <NewTaskForm/>
    </div>
  )
}

export default NewTaskPage