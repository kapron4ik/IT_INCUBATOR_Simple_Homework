import React, {ChangeEvent, useState} from "react";
import {Slider, makeStyles, withStyles} from "@material-ui/core";
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    step?: number
    // min, max, step, disable, ...
}

const AirbnbThumbComponent = (props: any) => {
    return (
        <span {...props}>
      <span className="bar"/>
      <span className="bar"/>
      <span className="bar"/>
    </span>
    );
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        step,
        // min, max, step, disable, ...
        ...restProps
    }
) => {

    const handleChange = (event: React.SyntheticEvent<EventTarget>, newValue: any) => {
        console.log(event.currentTarget)
        onChangeRange && onChangeRange(newValue)

    };


    const AirbnbSlider = withStyles({
        // root: {
        //     color: '#db1a41',
        //     height: 3,
        //     padding: '13px 0',
        // },
        // thumb: {
        //     height: 27,
        //     width: 27,
        //     backgroundColor: '#fff',
        //     border: '1px solid currentColor',
        //     marginTop: -12,
        //     marginLeft: -13,
        //     boxShadow: '#ebebeb 0 2px 2px',
        //     // '&:focus, &:hover, &$active': {
        //     //     boxShadow: '#ccc 0 2px 3px 1px',
        //     // },
        //     // '& .bar': {
        //     //     // display: inline-block !important;
        //     //     height: 9,
        //     //     width: 1,
        //     //     backgroundColor: 'currentColor',
        //     //     marginLeft: 1,
        //     //     marginRight: 1,
        //     // },
        // },
        // active: {},
        // track: {
        //     height: 3,
        // },
        // rail: {
        //     color: '#f192b8',
        //     opacity: 1,
        //     height: 3,
        // },
    })(Slider);
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 300 + theme.spacing(3) * 2,
        },
        margin: {
            height: theme.spacing(3),
        },
    }));
    const classes = useStyles();

    // сделать самому, можно подключать библиотеки

    return <div className={classes.root}>

        <AirbnbSlider
            ThumbComponent={AirbnbThumbComponent}
            // getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            // defaultValue={[20, 40]}
            value={value}
            valueLabelDisplay="auto"
            onChange={handleChange}
        />

        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            step={step}
        />
    </div>;


}

export default SuperDoubleRange;
