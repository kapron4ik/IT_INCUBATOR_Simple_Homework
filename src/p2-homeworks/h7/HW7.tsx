import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'
import AlternativeSuperSelect from './common/c5-SuperSelect/AlternativeSuperSelect'

const arr = [{name:'x', icon: ' icon-trophy'},
    {name:'y', icon: ' icon-plane'},
    {name:'z', icon: ' icon-fire'}]

function HW7() {
    const [value, onChangeOption] = useState(arr[1].name)

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <AlternativeSuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
                <SuperRadio
                    name={'radio'} // 'options'
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
