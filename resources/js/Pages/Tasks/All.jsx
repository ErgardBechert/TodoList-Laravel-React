import Header from "@/Components/Header/Header";
import CreateForm from "@/Components/Form/CreateForm";
import MainLayout from "@/Layouts/MainLayout";
import Tasks from "@/Components/Tasks/Tasks";
import Popup from "@/Components/Popup/Popup";
import {useEffect, useState} from "react";

const All = ({tasks}) => {
    const [initialTasks, setInitialTasks] = useState(tasks)
    const [activePopup, setActivePopup] = useState(false)
    const [filteredTasks, setFilteredTask] = useState(tasks)
    const [filter, setFilter] = useState([])

    const [lastId, setLastId] = useState(tasks && tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1)

    const deleteTask = (task) => {
        setInitialTasks(filteredTasks.filter((item) => {
            return item.id !== task.id
        }))
        setFilteredTask(filteredTasks.filter((item) => {
            return item.id !== task.id
        }))
    }

    useEffect(() => {
        if (filter.length === 0) return
        setFilteredTask(initialTasks.filter((item) => filter.includes(item.status)))
    }, [filter]);

    const createTask = (newTask) => {
        setFilteredTask([...filteredTasks, newTask])
        setLastId(lastId + 1)
        setInitialTasks([...initialTasks, newTask])
    }

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

export default All
