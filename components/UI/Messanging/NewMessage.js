import React , {useState} from 'react'
import styled from 'styled-components'

function NewMessage({show , showNewMessage}) {
    return (
        <Container disp={show}>
            <MsgHeader>
                <Title>Nouveau message</Title>
                <HeaderActions>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                            <path d="M8 6.59L6.59 8 3 4.41V7H1V1h6v2H4.41zM13 9v2.59L9.41 8 8 9.41 11.59 13H9v2h6V9z"></path>
                        </svg>
                    </Button>
                    <Button onClick={()=>showNewMessage(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                          <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                        </svg>
                    </Button>
                </HeaderActions>
            </MsgHeader>
            <SearchProfile placeholder="Taper un ou plusieurs noms"/>
            <Conversation></Conversation>
            <FormArea placeholder="Rédiger un méssage..."/>
            <FooterActions>
                <Icons>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
  <path d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM3 11l3-2.95L9 11H3zm10 0h-2.77L6.31 7.13a.44.44 0 00-.62 0L3 9.77V5h10v6zm-2.5-2A1.5 1.5 0 109 7.5 1.5 1.5 0 0010.5 9zm0-2.25a.75.75 0 11-.75.75.75.75 0 01.75-.75z"></path>
</svg>
                    </Button>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M15 5a4 4 0 01-1.17 2.83l-3.46 3.46A2.5 2.5 0 018.6 12a2.46 2.46 0 01-2.5-2.48 2.55 2.55 0 01.75-1.79L9.61 5 11 6.39 8.25 9.17a.49.49 0 00-.15.35.5.5 0 00.9.36l3.46-3.47a2 2 0 10-2.87-2.82l-6 6A2 2 0 005 13a2 2 0 001.42-.59l.18-.17L8 13.66l-.17.17a4 4 0 01-5.66-5.66l6-6A4 4 0 0115 5z"></path>
</svg>
                    </Button>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
  <path d="M9 12H7V4h2v8zM6 6V4H2a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 001-1V8H4v2H3V6h3zm9 0V4h-4a1 1 0 00-1 1v7h2V9h2V7h-2V6h3z"></path>
</svg>
                    </Button>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
  <path d="M4.84 6A1.16 1.16 0 116 7.17 1.17 1.17 0 014.84 6zM8 9.38a3.51 3.51 0 01-2.3-.81l-.83 1.29a4.87 4.87 0 006.25 0l-.82-1.28a3.51 3.51 0 01-2.3.8zm2-4.55A1.17 1.17 0 1011.16 6 1.17 1.17 0 0010 4.83zM8 2.88A5.12 5.12 0 112.88 8 5.12 5.12 0 018 2.88M8 1a7 7 0 107 7 7 7 0 00-7-7z"></path>
</svg>
                    </Button>
                    <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M1 5v6a2 2 0 002 2h8V3H3a2 2 0 00-2 2zm4 0h2v2h2v2H7v2H5V9H3V7h2zm10-1v8h-1.5l-1.5-.75v-6.5L13.5 4z"></path>
</svg>
                    </Button>
                </Icons>
                <Envoyer>
                    Envoyer
                </Envoyer>
            </FooterActions>
        </Container>
    )
}

export default NewMessage


const Container = styled.div`
    width : 336px;
    height : 316px;
    background-color : #FFF;
    display : ${props => (props.disp ? "flex" : "none")};
    flex-direction : column;
    border-radius : 10px;
    border : 1px solid rgba(0, 0, 0, 0.09);
    position : fixed;
    bottom : 0;
    right : 298px;
    z-index : 9999;
`

const MsgHeader = styled.div`
display : flex;
flex-direction : row;
border-bottom : 1px solid rgba(0, 0, 0, 0.09);
justify-content : space-between;
align-items : center;
padding : 0 0 0 20px;

`

const Title = styled.h3`
    font-size : 14px;

`

const HeaderActions = styled.div`
margin : 10px;

`

const SearchProfile = styled.input`
    border : none;
    margin : 10px;
    outline : none;
`

const Conversation = styled.div`
    border-top : 1px solid rgba(0, 0, 0, 0.09);
    border-bottom : 1px solid rgba(0, 0, 0, 0.09);
    width : 100%;
    height : 130px;
`

const FormArea = styled.textarea`
border-top : 1px solid rgba(0, 0, 0, 0.09);
border-bottom : 1px solid rgba(0, 0, 0, 0.09);
border-right : none;
border-left : none;
margin-top : 0;
resize : none;
padding : 10px;
font-size : 13px;
outline : none;
font-family : apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;

`


const Icons = styled.div``

const Envoyer = styled.button`
    border : none;
    border-radius : 10px;
    background-color : rgba(0,0,0,0.08);
    color : rgba(0,0,0,0.3);
    font-weight : 700;
    padding : 0 10px;
    cursor : pointer;
`

const FooterActions = styled.div`
display : flex;
flex-direction : row;
justify-content : space-between;
background-color : #f9fafb;
padding : 5px 10px;
`

const Button = styled.button`
    border : none;
    background : none;
    width : 32px;
    height : 32px;
    cursor : pointer;
`