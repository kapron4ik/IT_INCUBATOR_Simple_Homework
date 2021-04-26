import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, InputHTMLAttributes} from 'react'
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        value,
        onChangeOption,
        ...restProps
    }
) => {


    const mappedOptions: any[] = options ? options.map((o, i) => {
        return <option key={i}
                       selected={o.name === value}
                       value={o.name}>
            select - {o.name}
        </option>
    }) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <div className={s.box}>
            <select className={ `${s.select} animated zoomIn`} onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
