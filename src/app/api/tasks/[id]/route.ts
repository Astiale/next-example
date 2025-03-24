import { connectDB } from "@/app/utils/database";
import { TaskDocument, TaskModel } from "@/models/task";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, props: {params: Promise<{id:string}>}) => {
    try {
        await connectDB();
        const params = await props.params;
        const task = await TaskModel.findById(params.id);
        if(!task) {
            return NextResponse.json({message:"Task not found"}, {status: 404});
        }
        return NextResponse.json({message:"success", task});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"failed"}, {status: 500});
    }
}

export const dynamic = 'force-dynamic';