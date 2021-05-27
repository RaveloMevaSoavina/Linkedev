import React from 'react'
import styled from 'styled-components'
import HomeLeftSide from '../../components/Card/Leftside'
import HomeRightSide from '../../components/Card/Rightside'

function Home() {
    return (
        <Layout>
            <HomeLeftSide/>
            home page
            <HomeRightSide/>
        </Layout>
    )
}

export default Home

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-row: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;