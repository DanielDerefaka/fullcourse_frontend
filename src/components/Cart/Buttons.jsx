import React from 'react'

const Buttons = ({classes, text, func, style, title}) => {
  return (
    <div>
        <button style={{style}} onClick={func} title={title} className={classes}>{text} </button>
    </div>
  )
}

export default Buttons