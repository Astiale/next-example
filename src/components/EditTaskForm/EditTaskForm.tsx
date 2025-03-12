const EditTaskForm = () => {
    return (
        <div className="mt-10 mx-auto, w-full max-w-sm">
            <form action="">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                        Title
                    </label>
                    <input type="text" id="title" name="title" required
                        className="block mt-2 py-1.5 px-2 w-full rounded-md border-0
                    shadow-sm ring-1 ring-inset ring-red-300"/>
                </div>
                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium">
                        Description
                    </label>
                    <input type="text" id="description" name="description" required
                        className="block mt-2 py-1.5 px-2 w-full rounded-md border-0
                    shadow-sm ring-1 ring-inset ring-red-300"/>
                </div>
                <div className="mt-6">
                    <label htmlFor="dueDate" className="block text-sm font-medium">
                        DueDate
                    </label>
                    <input type="date" id="dueDate" name="dueDate" required
                        min="2025-01-01"
                        max="2999-12-31"
                        className="block mt-2 py-1.5 px-2 w-full rounded-md border-0
                    shadow-sm ring-1 ring-inset ring-red-300"/>
                </div>
                <div className="mt-6 flex items-center">
                    <input type="checkbox" id="isCompleted" name="isCompleted"
                        className="mr-2 w-4 h-4"/>
                    <label htmlFor="isCompleted" className="text-sm">
                        Update to Completed
                    </label>
                </div>
                <button type="submit" className="mt-8 w-full py-2 
                    bg-gray-800 text-white hover:bg-gray-700 rounded-md
                    text-sm font-semibold shadow-sm
                ">
                    Edit
                </button>
            </form>
        </div>
    )
}

export default EditTaskForm