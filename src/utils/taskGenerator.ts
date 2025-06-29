import axios from 'axios';

type Task = {
    id: number;
    task: string;
    image?: string;
    location?: string;
    priority: string;
    status: string;
}

export const taskGenerator = async (numOfTasks: number): Promise<Task[]> => {
    try {
        const response = await axios.post('https://mygoogleai.onrender.com/generate', {
            "prompt": `Generate ${numOfTasks} random daily tasks. Return only numbered list with simple tasks like: 1. Call doctor 2. Buy groceries 3. Submit report. Each task should be short and actionable.`
        });

        // Convert the response string into Task array
        const taskList = response.data.response
            .split('\n')
            .filter(Boolean)
            .map((taskText: string, index: number) => {
                // Extract just the task text without the number
                const cleanTask = taskText.replace(/^\d+[\).\s]*/, '').trim();
                
                return {
                    id: index + 1, // Using 1-based indexing
                    task: cleanTask,
                    image: '', // Empty string for image
                    location: '', // Empty string for location
                    priority: 'low', // Default priority
                    status: 'todo' // Default status
                };
            });

        return taskList;
    } catch (error) {
        console.error("Error generating tasks:", error);
        throw error;
    }
}