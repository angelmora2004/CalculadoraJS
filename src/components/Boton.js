import React from 'react'

export default function Boton(props) {
    return (
    <button className={props.className} onClick={() => props.hacerClic(props.children)}>{props.children}</button>
  )
}
