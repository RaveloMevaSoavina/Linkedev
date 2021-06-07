import React , {useState} from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar/Avatar'
import message from '../../../public/static/data/messages.json'

const SingleMsg = ({data}) =>{
    return (<OneLine>
        <Avatar source={data.author.avatarURI} alt="" status="connected"/>
        <Bordered>
            <From>
                <Pseudo>{data.author.name}</Pseudo>
                <Content>{data.author.name.split(" ")[0]} : {data.message[0].answer.slice(0,15)}...</Content>
            </From>
            <Date>
                {data.message[0].date}
            </Date>
        </Bordered>
        
    </OneLine>)
}

function MsgOverlay({showNewMessage}) {

    const [showBody ,setShowBody] = useState(false)

    
    return (
        <Container>
            <MsgHeader>
                <Info>
                    <div >
                        <img src="/static/images/avatar1.jpg" alt="" status="connected"/>
                    </div>
                    <span>Messagerie</span>
                </Info>
                <IconAction>
                    <button onClick={()=>showNewMessage(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                            <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                        </svg>
                    </button>
                    <button onClick={()=> setShowBody(!showBody)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                        </svg>
                    </button>
                </IconAction>
            </MsgHeader>
            {showBody && <MsgBody>
                <input placeholder="Rechercher dans les messages"/>
                {/* <SingleMsg/>
                <SingleMsg/>
                <SingleMsg/>
                <SingleMsg/>
                <SingleMsg/>
                <SingleMsg/>
                <SingleMsg/> */}
                {message.map(msg => <SingleMsg data={msg}/>)}
            </MsgBody>}
        </Container>
    )
}

export default MsgOverlay

const Container = styled.div`
width : 288px;
border : 1px solid rgba(0, 0, 0, 0.09);
border-radius : 10px 10px 0 0;
background-color : #FFF;
position : fixed ;
bottom : 0;
right: 0;
z-index: 100;
`
const MsgHeader = styled.div`
    display : flex;
    height : 47px;
    flex-direction : row;
    justify-content : space-between;
    border-bottom : 1px solid rgba(0, 0, 0, 0.09);
    padding : 10px;

`
const Info = styled.div`
    display : flex;
    flex-direction: row;
    align-items : center;
    span{
        font-size : 15px;
        font-weight : 500;
        maring-left : -10px;
    }
    div{
        width : 40px;
        heigth : 40px;
        position: relative;
        display: inline-block;
            &:before {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 23px;
            width: 9px ;
            height: 9px;
            border-radius: 100%;
            border: 2px solid #FFF;
            background-color: #057642;
            }

    }
    img{
         width :30px;
        height :30px;
        border-radius : 100%;
    }
`
const IconAction = styled.div`
    button{
        border : none;
        background : none;
        padding : 5px 5px;
        margin : 0 2px;
        &:hover{
            background-color: rgba(0, 0, 0, 0.09);
            border-radius : 100%;
        }
        svg{
            color : rgba(0, 0, 0, 0.6)
        }
    }
`

const MsgBody = styled.div`
    min-height : 450px;
    input{
        margin: 10px;
        height : 35px;
        background-color: #eef3f8;
        border : none;
        width : 264px;
        outline : none;
        padding : 0 10px;
        border-radius : 5px;
    }

`

const OneLine = styled.div`
display : flex;
flex-direction : row;
padding : 10px;
`

const From = styled.div`
display : flex;
flex-direction : column;

align-items: start;
`
const Pseudo = styled.span`
    font-size : 14px;
    font-weight : 500;
    color : rgba(0, 0, 0, 0.9);
    
`
const Content = styled.span`
font-size : 13px;
font-weight : 400;
color : rgba(0, 0, 0, 0.7);
`
const Date = styled.span`
font-size : 12px;
font-weight : 300;
color : rgba(0, 0, 0, 0.7);
`

const Bordered = styled.div`
display : flex;
flex-direction : row;
justify-content : space-around;
width : 100%;
padding-bottom: 5px;
border-bottom : 1px solid rgba(0, 0, 0, 0.09);
`