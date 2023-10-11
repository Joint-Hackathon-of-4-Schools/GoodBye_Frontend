import React from "react";
import * as _ from "./style"
import Arrow from "../../components/arrow";

const Main = () => {
    return (
        <_.Container>
            <_.Placard></_.Placard>
            <_.ContentBox>
                <_.MenuContainer>
                    <Arrow direction="up"/>
                    <_.MenuBar>
                        <_.MenuBox></_.MenuBox>
                        <_.MenuBox></_.MenuBox>
                        <_.MenuBox></_.MenuBox>
                        <_.MenuBox></_.MenuBox>
                    </_.MenuBar>
                    <Arrow />
                </_.MenuContainer>
            </_.ContentBox>
            <_.Placard></_.Placard>
        </_.Container>
    )
}

export default Main;