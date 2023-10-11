import React from "react";
import styled from "styled-components";

const Arrow = ({able='false', direction="down"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="56" viewBox="0 0 80 56" fill="none" style={{
      transform: `rotate(${direction === 'down' ? '0' : '180deg'})`
    }}>
      <path d="M15 -3.05176e-05L0 15.2727L40 56L80 15.2727L65 -3.05176e-05L40 25.4545L15 -3.05176e-05Z" fill={able ? '#D9D9D9': 'transparent'} />
    </svg>
  )
}

export default Arrow;