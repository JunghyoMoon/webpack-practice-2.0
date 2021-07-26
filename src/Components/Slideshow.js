import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    overflow: hidden;
`;

const Slider = styled.div``;

const Slide = styled.div`
    width: 1000px;
    height: 100px;
    display: inline-block;

    img {
        width: 30%;
        height: 100%;
    }

    ul {
        position: absolute;
    }
`;

const Slidshow = ({ top5 }) => (
    <Container>
        <Slider>
            {top5.map((deal, index) => (
                <Slide>
                    <img src={deal.thumb} />
                    <ul>
                        <li>{deal.title}</li>
                        <li>{deal.savings}</li>
                    </ul>
                </Slide>
            ))}
        </Slider>
    </Container>
);

export default Slidshow;
