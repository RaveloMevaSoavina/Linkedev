import React from 'react'
import styled from 'styled-components'

function Avatar({status , source , alt}) {
    return (
        <Container status={status}>
            <Image src={source} alt={alt} />
        </Container>
        
    )
}

export default Avatar


const Container = styled.span`
    width : 40px;
    height : 40px;
    position: relative;
    margin-right : 20px;
    display: inline-block;
        &:before {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 34px;
        width: ${props => (props.status != "connected" ? "6px" : "9px")} ;
        height: ${props => (props.status != "connected" ? "6px" : "9px")} ;
        border-radius: 100%;
        border: ${props => (props.status != "connected" ? "2px solid #057642" : "2px solid #FFF")};
        background-color: ${props => (props.status != "connected" ? "#FFF" : "#057642")};
        }

`
const Image = styled.img`
    width : 40px;
    height : 40px;
    border-radius : 100%;
`