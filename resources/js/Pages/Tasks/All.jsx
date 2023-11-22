import Header from "@/Components/Header/Header";
import CreateForm from "@/Components/Form/CreateForm";
import MainLayout from "@/Layouts/MainLayout";
import Tasks from "@/Components/Tasks/Tasks";
import Popup from "@/Components/Popup/Popup";
import {useState} from "react";

const All = ({tasks}) => {
    const [activePopup, setActivePopup] = useState(false)

    return (
        <>
            <Header/>
            <MainLayout>
                <CreateForm/>
                <Tasks tasks={tasks}/>
            </MainLayout>
            <Popup active={activePopup} setActive={setActivePopup} title="Заголовок"/>
        </>
    );
};

export default All
