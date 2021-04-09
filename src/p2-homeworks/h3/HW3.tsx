import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "./HW3.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser: UserType = {_id: v1(), name: name};
        setUsers([newUser, ...users])// need to fix
    }

    return (
        <div className={s.wrapper}>
            {/*<hr/>*/}
            <h3>homeworks 3</h3>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW3;
