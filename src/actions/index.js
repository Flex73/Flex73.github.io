import { ADD_TASK, DELETE_TASK, CLEAR_TASKS } from '../constants';

export const addTask = (text, dueDate) => {
    const action = {
        type: ADD_TASK,
        text,
        dueDate
    }
    console.log("Task added", action);
    return action;
}

export const deleteTask = (id) => {
    const action = {
        type: DELETE_TASK,
        id
    }
    console.log("Task deleted", action);
    return action;
}

export const clearTasks = () => {
    return {
        type: CLEAR_TASKS
    }
}