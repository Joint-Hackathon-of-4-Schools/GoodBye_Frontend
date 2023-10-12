import React from "react";

const Arrow = ({able=false, direction="down", ...args}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="56" viewBox="0 0 80 56" fill="none" style={{
      transform: `rotate(${direction === 'down' ? '0' : '180deg'})`
    }}
    {...args}
    >
      <path d="M15 -3.05176e-05L0 15.2727L40 56L80 15.2727L65 -3.05176e-05L40 25.4545L15 -3.05176e-05Z" fill={able ? '#000': 'transparent'} />
    </svg>
  )
}

export default Arrow;