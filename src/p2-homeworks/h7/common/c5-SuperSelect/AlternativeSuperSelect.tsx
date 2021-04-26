import React, {DetailedHTMLProps, ChangeEvent, InputHTMLAttributes} from 'react'
import s from "./AlternativeSuperSelect.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperSelectPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const AlternativeSuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        value,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    const mappedOptions: any[] = options ? options.map((o, i) => {
        return <label className={s.option} key={i}>
            <input type="radio"
                   name="option"
                   checked={o.name === value}
                   value={o.name}
                   onChange={onChangeCallback}/>
            <span className={`${s.title} animated fadeIn`}>
                <i className={`${s.icon} icon ${o.icon}`}></i> select - {o.name}</span>
        </label>
    }) : []; // map options with key

    return (
        <div className={`${s.select} animated zoomIn`} onClick={()=>console.log('click')}>
            <input type="radio" name="option" onClick={()=>console.log('radio')}/>
            <i className={`${s.toggle} ${s.iconArrowDown} icon icon-arrow-down`}></i>
            <i className={`${s.toggle} ${s.iconArrowUp} icon icon-arrow-up`}></i>
            <span className={s.placeholder}>Choose...</span>
            {mappedOptions}
        </div>
    )
}

export default AlternativeSuperSelect
