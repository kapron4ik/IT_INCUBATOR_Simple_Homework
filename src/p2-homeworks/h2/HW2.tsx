import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "./HW2.module.css"

// types
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}; // need to fix any
export type FilterType = "all" | AffairPriorityType;


// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    // if (filter === "all") {return affairs};
    if (filter === "high") {
        return affairs.filter(task => task.priority === "high")
    }
    if (filter === "middle") {
        return affairs.filter(task => task.priority === "middle")
    }
    if (filter === "low") {
        return affairs.filter(task => task.priority === "low")
    } else {
        return affairs
    }
    // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(task => task._id !== _id); // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <>
            <div className={s.wrapper}>
                <h3>homeworks 2</h3>

                {/*should work (должно работать)*/}
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </>
    );
}

export default HW2;
