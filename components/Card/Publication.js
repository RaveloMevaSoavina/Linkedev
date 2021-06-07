import React, {useState} from 'react';
import Avatar from '../UI/Avatar/Avatar';
import styled from "styled-components";



const YoutubeEmbed = ({ embedId }) => (
    <VideoResponsive>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoResponsive>
  );


function Publication({post}) {
    const [toComment , setToComment] = useState(post.hasComments);

    return (
        <Card>
            <AuthorInfo>
                {/* <img src={post.avatarURI} alt={post.imageURI}/> */}
                <Avatar source={post.avatarURI} alt="" status={post.authorStatus}/>
                <div>
                    <strong>{post.author} <span>  ∙ 3e</span></strong>
                    <span id="post">{post.postInfo}</span>
                    <span id="post">{post.timestamp} ∙
                        <span> 
                            <svg width="16px" height="16px">
                            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                            </svg>
                        </span>
                    </span>
                </div>
            </AuthorInfo>
            {post.hasLegend && <Text>
            {post.postLegend}
            </Text>}
            {post.hasImage && <ImagePost src={post.imageURI} alt={post.imageURI}/>}
            {post.hasVideo && <YoutubeEmbed embedId="rokGy0huYEA" />}
            <Rate>
                <div>
                    <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                    <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                </div>
                <div>
                    <span className="rating">{post.rateReactions}</span> ∙ <span className="rating">{post.rateComments} commentaires</span>
                </div>
            </Rate>
            <div style={{backgroundColor: "rgba(0, 0, 0,0.09)", height: "1px" }}></div>
            <Actions>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>
                    <span>J'aime</span>
                </button>
                <button onClick={()=>setToComment(!toComment)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>
                    <span>Commenter</span>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                    </svg>
                    <span>Partager</span>
                    </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    <span>Envoyer</span>
                </button>
            </Actions>
            {toComment &&<Comments>
                <PostingComment>
                    <img src="static/images/avatar1.jpg" alt=""/>
                    <input placeholder="Ajouter un commentaire..."/>
                </PostingComment>
                {post.comments.length > 0 &&
                <div>
                    <FilterComment>
                        <button>Les plus pertinents</button>
                    </FilterComment>
                    {post.comments.map(comment => 
                        <CommentsList key={comment.id}>
                            <AuthorInfo>
                                <img src={comment.avatarURI} alt=""/>
                                <div id="commentaire" style={{padding : "10px"}}>
                                    <strong>{comment.author}<span>  ∙ 3e</span></strong>
                                    <span id="post">{comment.postInfo} </span>
                                    <Comms>
                                        {comment.commentaire}
                                    </Comms>
                                </div>
                            </AuthorInfo>
                            <ButtonGroup>
                                <button>J'aime</button>
                                |
                                <button>Répondre</button>
                            </ButtonGroup>
                        </CommentsList>)}
                    </div>
                }
            </Comments>}
        </Card>
    )
}

export default Publication


const Card = styled.div`
    margin-top : 20px;
    border: 1px solid rgba(0,0,0,0.09);
    width : 540px;
    height : 100%;
    background-color : #FFF;
    display : flex;
    flex-direction : column;
    padding : 20px;
    border-radius : 10px;

`

const AuthorInfo = styled.div`
    display : flex;
    img{
        width : 40px;
        height : 40px;
        border-radius : 100%;
        margin-right : 10px;
    }
    div{
        width : 100%;
        display : flex;
        flex-direction : column;
        span[id="post"]{
            color: rgba(0, 0, 0,0.5);
            font-size : 13px;
            span{
                margin-top : 10px;
                margin-left : 10px;
            }
        }
        strong{
            color: rgba(0, 0, 0,0.9);
            font-size : 14px;
            span{
                font-weight : normal;
                color: rgba(0, 0, 0,0.5);
            }
        }
    }
    #commentaire{
        background-color : #f2f2f2;
        border-radius : 0px 10px 10px 10px;
    }
`

const Text = styled.p`
color: rgba(0, 0, 0,0.9);
font-size : 13px;
line-height: 32px;
margin : 20px 0;
`

const Rate = styled.div`
display : flex;
flex-direction : row;
margin-bottom : 5px;
img{

}
div{
    height: 100%;
    font-size : 12px;
    margin-left : 10px; 
}
.rating{
    cursor : pointer;
    color : rgba(0,0,0,0.7);
    &:hover{
        color: #0a66c2;
        text-decoration: underline;
    }
}

`

const Actions = styled.div`
margin : 0;
display : flex;
    flex-direction : row;
button{
    background-color:#FFF;
    border : none;
    border-radius : 3px;
    align-items: center;
    padding : 10px;
    margin-top : 5px;
    display : flex;
    flex-direction : row;
    cursor : pointer;
    color : rgba(0,0,0,0.7);
    font-weight: bold;
    font-size : 13px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }
    svg{
        margin-right: 5px;
    }
}
`

const Comments = styled.div`
    margin-top : 20px;
`

const PostingComment = styled.div`
    display : flex;
    flex-direction : row;
    img{
        width : 40px;
        height : 40px;
        border-radius : 100%;
        margin-right : 10px;
    }
    input{
        border-radius : 30px;
        width : 382px;
        height : 40px;
        outline : none;
        padding : 20px;
        border : 1px solid rgba(0, 0, 0, 0.3);
        font-size : 14px;
        font-weight : 600;
        color : rgba(0, 0, 0, 0.7);
        &:focus{
            border : 1.9px solid rgba(0, 0, 0, 0.4);
        }
    }
`

const FilterComment = styled.div`
    margin-top : 20px;
    button{
        border : none;
        background: none;
        cursor : pointer;
        color : rgba(0,0,0,0.7);
        font-weight : bold;
        
    }

`

const CommentsList = styled.div`
    margin-top : 20px;


`


const Comms = styled.p`
color: rgba(0, 0, 0,0.9);
font-size : 13px;
margin : 5px 0;
`

const ButtonGroup = styled.div`
    margin : 5px 50px;
    color : rgba(0,0,0,0.7);
    button{
        border : none;
        background: none;
        cursor : pointer;
        font-size : 13px;
        font-weight : 600;
        padding : 2px;
        margin : 0 10px;
        border-radius : 2px;
        color : rgba(0,0,0,0.7);
        &:hover{
            background-color: rgba(0, 0, 0, 0.09);
        }
    }
`


const ImagePost = styled.img`
    width : 539px;
    // height : 360px;
    margin-left : -20px;
    margin-bottom : 20px;
    object-fit : fill;
`

const VideoResponsive = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    margin-bottom : 20px;
    iframe{
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`