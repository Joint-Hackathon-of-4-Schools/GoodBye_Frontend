import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SizeLayout = () => {
  return (
    <Conatiner onContextMenu={(e) => e.preventDefault()}>
      <Outlet />
    </Conatiner>
  )
}

export default SizeLayout;

const Conatiner = styled.div`
  width: 1080px;
  aspect-ratio: 9 / 16;
  position: absolute;
  top: 0;
  left: calc((100vw - 1080px) / 2);
  position: relative;
`
