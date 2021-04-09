import React from "react";
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType, className: string) {
    return (
        <div className={s.message}>
            <div className={s.containerImg}>
                <img className={s.img} src={props.avatar}></img>
            </div>
            <div className={s.containerMsg}>
                <div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.msg}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    );
}

export default Message;
