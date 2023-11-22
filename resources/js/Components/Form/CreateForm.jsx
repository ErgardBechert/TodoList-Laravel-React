import React from 'react';
import Input from "@/Components/Inputs/Input";
import Button from "@/Components/Buttons/Button";
import Plus from "/public/images/plus.png"
import styles from "./CreateForm.module.css"

const CreateForm = () => {
    return (
        <div className={styles.form}>
            <Input name="title" type="text" placeholder="Добавить новую задачу"/>
            <Button>Создать <img src={Plus} alt=''/></Button>
        </div>
    );
};

export default CreateForm;
