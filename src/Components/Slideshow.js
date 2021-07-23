import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Slider = styled.div``;

const Slide = styled.div``;

const Slidshow = ({ top5 }) => (
    <Container>
        <Slider>
            {top5.map((deal, index) => (
                <Slide>
                    <img src={deal.thumb} />
                    <span>{deal.title}</span>
                    <span>{deal.savings}</span>
                </Slide>
            ))}
        </Slider>
    </Container>
);

export default Slidshow;
