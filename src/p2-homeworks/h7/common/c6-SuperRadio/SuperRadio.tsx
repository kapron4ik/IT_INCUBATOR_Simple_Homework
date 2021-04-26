import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <li className={s.listItem} key={i}>
            <input
                type='radio'
                name={name}
                checked={o.name === value}
                value={o.name}
                onChange={onChangeCallback}
                className={s.radioBtn}
                id={'opt' + '-' + i}
                // name, checked, value, onChange
            />
            <label htmlFor={'opt' + '-' + i} className={s.label}>
                select - {o.name}
            </label>
        </li>
    )) : []

    return (
        <div className={s.container}>
            <ul className={s.list}>
                {mappedOptions}
            </ul>
        </div>
    )
}

export default SuperRadio
