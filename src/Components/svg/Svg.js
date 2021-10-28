import React from 'react'
// import styles from "./Svg.module.css"
import sprite from "../../icons/sprite.svg"

const Svg = ({svgName}) => {
    return (
        // <button className={styles.svg} type="button" > {svgName} </button>
        <svg  width="20" height="20" fill="white"> 
            <use href={ sprite + "#add"}/>
</svg >
    )
}

export  {Svg};