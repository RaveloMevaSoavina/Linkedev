import React ,{useState , useEffect} from 'react'
import Posting from '../Card/Posting'
import Publication from '../Card/Publication'
import styled from 'styled-components'
import data from '../../public/static/data/posts'
import MsgOverlay from '../UI/Messanging/MsgOverlay';
import NewMessage from '../UI/Messanging/NewMessage'

function Post() {
    const [dataToPost , setDataToPost] = useState({})

    const [showNewMessage , setShowNewMessage] = useState(false)

    const takeData = (value) =>{
        setDataToPost(value);
    }

    const HandleShowNewMessage = (value)=>{
        setShowNewMessage(value)
    }

    const obj = JSON.parse(JSON.stringify(data));
    obj.unshift(dataToPost)

    return (
        <Main>
            <NewMessage show={showNewMessage} showNewMessage={HandleShowNewMessage}/>
            <MsgOverlay showNewMessage={HandleShowNewMessage}/>
            <Posting takeData={takeData}/>
            {obj.length > 2 && obj.map(o => Object.entries(o).length === 0) && obj.filter(o => Object.entries(o).length != 0).map(post => <Publication post={post} key={post.id}/>)}
        </Main>
    )
}

export default Post


const Main = styled.div`
    display : flex;
    flex-direction : column;
`