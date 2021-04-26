import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Greeting.module.css";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

let totalUsers = 0; // need to fix
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value); // need to fix
        setError("")
    };

    const addUser = () => {
        const trimmedTitle = name.trim()
        if (trimmedTitle !== "") {
            addUserCallback(trimmedTitle)
            alert(`Hello ${trimmedTitle} !`)
            ++totalUsers
            console.log(totalUsers)
        } else {
            setError('Title is requaired')
        }
        setName ("")// need to fix

    };


    return (
        <div className={s.wrapper}>
            {/*<Greeting*/}
            {/*    name={name}*/}
            {/*    setNameCallback={setNameCallback}*/}
            {/*    addUser={addUser}*/}
            {/*    error={error}*/}
            {/*    totalUsers={totalUsers}*/}
            {/*/>*/}
            <SuperInputText
                value={name}
                error={error}
                onChange={setNameCallback}
            />
            <SuperButton onClick={addUser}>
                add
            </SuperButton>
            <span className={s.counter}>{totalUsers}</span>
        </div>

    );
}

export default GreetingContainer;
