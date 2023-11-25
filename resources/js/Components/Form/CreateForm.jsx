import React, {useState} from 'react';
import Input from "@/Components/Inputs/Input";
import Button from "@/Components/Buttons/Button";
import Plus from "/public/images/plus.png"
import styles from "./CreateForm.module.css"

const CreateForm = ({createTask, id}) => {
    const [post, setPost] = useState({
        title: '',
        description: '',
        status: 0,
    })

    const addNewTask = (e) => {
        e.preventDefault()

        const newPost = {
            ...post, id: id
        }

        createTask(newPost)
        setPost({title: '', description: '', status: 0})
    }

    return (
        <form>
        <div className={styles.form}>
            <Input
                type="text"
                placeholder="Добавить новую задачу"
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <Button onClick={addNewTask}>Создать <img src={Plus} alt=''/></Button>
        </div>
        </form>
    );
};

export default CreateForm;
