import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// Using fetch() method
const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!res.ok) {
            throw new Error (`HTTP Error: ${res.status}`);
        }

        const info: Todo = await res.json();
        console.log("Todo: ", info);
    } catch (error: any) {
        console.log("Error ", error);
    }
}


// Using Axios library
const fetchDataAxios = async () => {
    try {
        const response: AxiosResponse <Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo; ", response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error: ", error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
}