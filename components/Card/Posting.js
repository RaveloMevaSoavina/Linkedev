import React , {useState , useRef , useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import Avatar from "../UI/Avatar/Avatar"

const data = {
    id : uuidv4(),
    author : "RAVELO MEVA SOAVINA",
    postInfo : "Devéloppeur web frontEnd",
    timestamp : `${new Date(Date.now()*1000).getSeconds()} secondes`,
    authorStatus : "connected",
    avatarURI : "https://drive.google.com/uc?export=view&id=1k7CQAOXD5zcCCizqhvIWVT-y1SyQbLaC",
    hasLegend : true,
    postLegend : "",
    hasImage : false,
    imageURI : "",
    hasVideo : false,
    videoURI : "",
    rateReactions : 0,
    rateComments : 0,
    hasComments : false,
    comments : []

}

function Posting({takeData}) {

    const [pub , setPub] = useState({...data})
    const [openOverlay , setOpenOverlay] = useState(false)
    const [addHash, setAddHash] = useState(false);
    const imgRef = useRef(null);
    const txtareaRef = useRef(null)

    
    useEffect(() => {
        if (addHash) {

        }
      }, [addHash]);

    const onInputChange = (ev) => {
        let imageURI = "";
        if (ev.target.type === "file") {
            try {
                imageURI = URL.createObjectURL(imgRef.current?.files[0])
            } catch (error) {
                imageURI = null
            }
            setPub({ ...data, imageURI: imageURI , hasImage : true , postLegend : txtareaRef.current?.value});
        } else if (ev.target.name === "postLegend"){
            setPub({ ...data, postLegend : txtareaRef.current?.value , hasLegend :  true });
        }
    }

    console.log(pub)

    const fileSelection = (ev) => {
        imgRef.current.click();
    };

    const hanldePullUp = (e) => {
        e.preventDefault();
        setOpenOverlay(false);
        setPub({...data , imageURI : ""})
        console.log(pub , "enfant")
        return takeData(pub);
    }

    return (
        <Container>
            {openOverlay && <OverlayContainer><Overlay>
                <OverlayHeader>
                    <h2>Créer un post</h2>
                    <button onClick={()=> {
                        setOpenOverlay(false)
                        setPub({...data , imageURI : ""})
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
                            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                        </svg>
                    </button>
                </OverlayHeader>
                <OverlayBody>
                    <AuthorInfo>
                        <Avatar source="https://drive.google.com/uc?export=view&id=1k7CQAOXD5zcCCizqhvIWVT-y1SyQbLaC" alt="" status="connected"/>
                        <DivTitle>
                            <span>RAVELO MEVA SOAVINA</span>
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                </svg>
                                <span>Tout le monde</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                  <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                            </button>
                        </DivTitle>
                    </AuthorInfo>
                    <Editor>
                        <textarea placeholder="De quoi souhaitez-vous discuter?" ref={txtareaRef} autoFocus onChange={(e)=> onInputChange(e)} name="postLegend" value={pub?.postLegend}/>
                    </Editor>
                    <img src={pub?.imageURI} alt={pub?.imageURI}/>
                    <HastagButton onClick={()=>setAddHash(true)}>Ajouter un Hashtag</HastagButton>
                    <input type="file" onChange={onInputChange} ref={imgRef} style={{display : "none"}}/>
                    <ToPostAction> 
                        <MediaButtonGroup>
                            <button onClick={fileSelection}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                </svg>
                            </button>

                            <button title="disabled">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                </svg>
                            </button>
                            <button disabled>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                  <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                                </svg>                      
                            </button>
                        </MediaButtonGroup>
                        <button id="visibility">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                            </svg>
                            <span> 
                                Tout le monde
                            </span>
                        </button>
                        <button id="envoyer" onClick={hanldePullUp} >Publier</button>
                    </ToPostAction>
                </OverlayBody>
            </Overlay>
            </OverlayContainer>}
            <TopPart>
                <img src="static/images/avatar1.jpg" alt=""/>
                {/* <img src="https://drive.google.com/uc?export=view&id=1k7CQAOXD5zcCCizqhvIWVT-y1SyQbLaC" alt="Avatar"/> */}
                <input type="text" placeholder="Commencer un post" onClick={()=> setOpenOverlay(true)}/>
            </TopPart>
            <BottomPart>
                <button>
                    <svg id="photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                    <span>Photo</span>
                </button>
                <button>
                    <svg id="vidéo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                    </svg>
                    <span>Vidéo</span>
                </button>
                <button>
                    <svg id="événement" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                    </svg>
                    <span>Evénement</span>
                </button>
                <button>
                    <svg id="article"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                    </svg>
                    <span>Rédiger un article</span>
                </button>
            </BottomPart>
        </Container>
    )
}

export default Posting

const Container = styled.div`
    width: 540px;
    padding : 0 10px 5px 10px;
    background-color : #FFF;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    justify-content : space-around;

`

const TopPart = styled.div`
    display : flex;
    justify-content : space-around;
    margin : 20px 0 10px 0;
    img{
        width : 40px;
        height : 40px;
        border-radius: 100%;
    }
    input{
        width : 452px;
        height : 48px;
        border-radius: 50px;
        outline : none;
        padding : 20px;
        border : 1px solid rgba(0, 0, 0, 0.09);
        font-size : 14px;
        font-weight : 600;
        color : rgba(0, 0, 0, 0.7);
        cursor : pointer;
        &:hover{
            background-color: rgba(0, 0, 0, 0.08);
        }
    }
`

const BottomPart = styled.div`
display : flex;
justify-content : space-around;

button{
    display : flex;
    border : none;
    background-color : #FFF;
    font-size : 14px;
    font-weight : 600;
    
    align-items: center;
    padding : 10px;
    border-radius : 5px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }
    svg[id="photo"]{
        color : #70b5f9;;
    }
    svg[id="vidéo"]{
        color : #7fc15e;
    }
    svg[id="événement"]{
        color : #e7a33e;;
    }
    svg[id="article"]{
        color : #f2c5b8;
    }
    span{
        margin :3px 10px;
        color : rgba(0, 0, 0, 0.7)
    }
}
`

const OverlayContainer = styled.div`
    width: 100%;
    height : 100%;
    background-color : rgba(0, 0, 0, 0.7);
    position : fixed;
    top :0;
    left : 0;
    z-index : 9999;

`

const Overlay = styled.div`
    width : 537px;
    height : 350px;
    background-color : #FFF;
    border-radius : 10px;    
    border : 1px solid rgba(0, 0, 0, 0.09);
    position : relative;
    top :50px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index : 10000;
    overflow-y : scroll;
    overflow-x : hidden;
    
`

const OverlayHeader = styled.div`
    width : 537px;
    // height : 45px;
    padding : 10px 20px ;
    display : flex;
    justify-content : space-between;
    border-bottom : 1px solid rgba(0, 0, 0, 0.09);
    h2{
        font-size : 20px;
        margin : 0;
        padding : 5px 20px;
        font-weight: 400;
        color : #444;
    }
    button{
        border : none;
        background : none;
        svg{
            color : rgba(0, 0, 0, 0.2);
            padding : 5px;
            border-radius : 100%;
            &:hover{
                background-color : rgba(0, 0, 0, 0.09);
            }
        }
    }
`
const Editor = styled.div`
    display : flex;
    flex-direction : column;
    textarea{
        display : block;
        border : none;
        width : 513px;
        outline : none;
        resize : none;
        margin : 10px 0;
        font-family : apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    }
`

const HastagButton = styled.button`
        border : none;
        background : none;
        color : #0a66c2;
        font-size : 14px;
        font-weight : 700;
        width : 100%;
        text-align : left;
        cursor:pointer;
`

const OverlayBody = styled.div`
    display : flex;
    flex-direction : column;
    padding : 20px;
}
`

const AuthorInfo = styled.div`
    display : flex;
    flex-direction : row;
    margin-bottom : 20px;
    img{
        width: 40px;
        height : 40px;
        border-radius : 100%;
        margin-right : 10px;
}   
`

const DivTitle = styled.div`
display : flex;
flex-direction : column;
padding : 0;
button{
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    padding : 10px 20px;
    background : none;
    border-radius : 20px;
    border : 1px solid rgba(0, 0, 0, 0.3);
    cursor : pointer;
}
span{
    color : #222;
    font-weight: 600;
}

`

const ToPostAction = styled.div`
    width : 100%;
    display : flex;
    margin-top : 20px; 
    button[id="envoyer"]{
        border : none;
        background-color :${props => (props.disabled ? "rgba(0,0,0,0.9)"  : "#0a66c2")};
        color : #FFF;
        padding: 20px 10px;
        font-size : 14px;
        font-weight : 700;
        text-align : right;
        padding : 10px 20px;
        border-radius : 20px;
        cursor : pointer;
    }
    button[id="visibility"]{
        display : flex;
        border : none;
        align-items: center;
        padding : 10px 20px;
        margin : 0 10px;
        border-radius : 20px;
        background : none;
        cursor : pointer;
        &:hover{
            background-color : rgba(0,0,0,0.09); 
        }
        span{
            margin : 0 10px;
        }
    }
    svg{
        color : rgba(0, 0, 0, 0.4);
    }

`
const MediaButtonGroup = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    display : flex;
    padding-right : 10px;
    button{
        border : none;
        background : none;
        margin : 0 2px;
        cursor : pointer;
        svg{
            color : rgba(0, 0, 0, 0.4);
            
        }
    }
`