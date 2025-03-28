'use server';

import { connectDB } from "@/app/utils/database";
import { Task, TaskModel } from "@/models/task";
import { redirect } from "next/navigation";


export interface FormState {
    error: string;
}

export const createTask = async(state: FormState, formData: FormData) => {
    const newTask:Task = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        dueDate: formData.get('dueDate') as string,
        isCompleted: false
    };

    try {
        await connectDB();
        await TaskModel.create(newTask);
    } catch (error) {
        state.error = "タスクの作成に失敗しました。";
        console.log(error)
        return state;
    }

    redirect('/')
}

export const updateTask = async(id: string, state: FormState, formData: FormData) => {
    const updatedTask:Task = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        dueDate: formData.get('dueDate') as string,
        isCompleted: Boolean(formData.get('isCompleted')),
    };

    try {
        await connectDB();
        await TaskModel.updateOne({_id: id}, updatedTask);
    } catch (error) {
        state.error = "タスクの更新に失敗しました。";
        console.log(error)
        return state;
    }

    redirect('/')
}

export const deleteTask = async (id: string, state: FormState) => {
    try {
      await connectDB();
      await TaskModel.deleteOne({ _id: id });
    } catch (error) {
      state.error = 'タスクの削除に失敗しました';
      console.log(error)
      return state;
    }
  
    redirect('/');
  };
  