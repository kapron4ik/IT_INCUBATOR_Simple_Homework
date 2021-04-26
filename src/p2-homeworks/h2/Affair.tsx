import React from "react";
import {AffairType} from "./HW2";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={s.wrapper}>
            {/*// show some text*/}
            <SuperCheckbox            >
                {props.affair.name} - {props.affair.priority}
            </SuperCheckbox>
            <SuperButton red onClick={deleteCallback}>X</SuperButton>
            {/*<input type="checkbox"/>*/}
            {/*<span>{props.affair.name} - </span>*/}
            {/*<span>{props.affair.priority} </span>*/}
            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    );
}

export default Affair;
