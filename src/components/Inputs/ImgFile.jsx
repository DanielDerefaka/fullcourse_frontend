import React from 'react'

const ImgFile = ({src, alt, style, classes, id}) => {
  return (
    <div>
        <img 
            src={src} 
            alt={alt} 
            style={{style}} 
            className={classes} 
            id={id}
        />
    </div>
  )
}

export default ImgFile