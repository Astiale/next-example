import { connectDB } from "@/app/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
    const currentDate = new Date().toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).replace(/\//g, '-');
    try {
        await connectDB();
        const allTasks:TaskDocument[] = await TaskModel.find({isCompleted: false, dueDate: {$lt: currentDate}});
        return NextResponse.json({message:"success", tasks: allTasks});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"failed"}, {status: 500});
    }
}

export const dynamic = 'force-dynamic';