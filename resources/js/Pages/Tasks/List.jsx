import Header from "@/Components/Header/Header";
import CreateForm from "@/Components/Form/CreateForm";
import MainLayout from "@/Layouts/MainLayout";
import Tasks from "@/Components/Tasks/Tasks";
import Popup from "@/Components/Popup/Popup";
import { useEffect, useState } from "react";

const List = ({tasks}) => {
    const [initialTasks, setInitialTasks] = useState(tasks)
    const [activePopup, setActivePopup] = useState(false)
    const [filteredTasks, setFilteredTask] = useState(tasks)
    const [filter, setFilter] = useState([])
    const [error, setError] = useState('')

    const updateError = (error) => {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 2000)
    }

    const [lastId, setLastId] = useState(tasks && tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1)

    const createTask = async (newTask) => {
        const response = await axios.post('/tasks/',
            {
                'title': newTask.title
            }
        );

        if (!response.data.success) {
            updateError(response.data.message)
            return;
        }

        newTask = response.data.task

        setFilteredTask([newTask, ...filteredTasks])
        setLastId(lastId + 1)
        setInitialTasks([newTask, ...initialTasks])
    }

    const deleteTask = async (task) => {
        const response = await axios.delete('/tasks/' + task.id);
        if (!response.data.success) {
            updateError(response.data.message)
            return;
        }

        setInitialTasks(filteredTasks.filter((item) => {
            return item.id !== task.id
        }))
        setFilteredTask(filteredTasks.filter((item) => {
            return item.id !== task.id
        }))
    }

    useEffect(() => {
        console.log(error)
    }, [error])

    useEffect(() => {
        if (filter.length === 0) return
        setFilteredTask(initialTasks.filter((item) => filter.includes(item.status)))
    }, [filter]);

    return (
        <>
            <Header/>
            <MainLayout>
                <CreateForm createTask={createTask} id={lastId}/>
                <Tasks
                    tasks={initialTasks}
                    deleteTask={deleteTask}
                    filteredTasks={filteredTasks}
                    setFilter={setFilter}
                />
            </MainLayout>
            <Popup active={activePopup} setActive={setActivePopup} title="Заголовок"/>
        </>
    );
};

export default List
