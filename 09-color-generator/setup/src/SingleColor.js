import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ( {weight, index, rgb, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(', ');
  //console.log(bgc);
  //const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article className='color' style={{background: `rgb(${bgc})`}} onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
      }}>
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p className='alert'>Copied to the clipboard</p>}
    </article>
    )
}

export default SingleColor
