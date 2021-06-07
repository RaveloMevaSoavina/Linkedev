import React from 'react'
import styled from 'styled-components'
import HomeLeftSide from '../../components/Card/Leftside'
import HomeRightSide from '../../components/Card/Rightside'
import Post from '../../components/Post/Post'

function Home() {
    return (
        <Layout>
            <HomeLeftSide/>
            <Post/>
            <HomeRightSide/>
        </Layout>
    )
}

export default Home

const Layout = styled.div`
  display : flex;
  flex-direction : row;
  justify-content : space-around;
  width : 1120px;
  margin : 25px auto;
  
`;