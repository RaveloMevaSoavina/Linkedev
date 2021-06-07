import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <NavigationBar>
            <ContentNavigation>
                <LogoArea src="static/images/home-logo.svg" alt="Linkedin Logo"/>
                <Search>
                    <div>
                        <input type="text" placeholder="Recherche" />
                    </div>
                    <SearchIcon>
                        <img src="static/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
          <NavListWrap>
            <NavList className="active">
                <a href="#">
                    <img src="static/images/nav-home.svg" alt="" />
                    <span>Acceuil</span>
                </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="static/images/nav-network.svg" alt="" />
                <span>Réseau</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="static/images/nav-jobs.svg" alt="" />
                <span>Emplois</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="static/images/nav-messaging.svg" alt="" />
                <span>Messagerie</span>
              </a>
            </NavList>

            <NavList>
              <a href="#">
                <img src="static/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a href="#">
                <img src="static/images/avatar1.jpg" alt="" />
                <span>
                    Vous
                    <img src="static/images/down-icon.svg" alt="" />
                </span>
              </a>

              {/* <SignOut>
                <a href="#">Sign Out</a>
              </SignOut> */}
            </User>

            <Work>
              <a href="#">
                <img src="static/images/nav-work.svg" alt="" />
                <span>
                  Produits
                  <img src="static/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
            </ContentNavigation>
        </NavigationBar>
    )
}

export default Header




const NavigationBar = styled.nav`
    width : 100vw;
    height : 53px;
    background-color : #FFF;
    position : fixed;
    top:0;
    z-index : 1000;
    padding : 0 24px;
    display : flex;
    flex-direction : row;
    margin-bottom : 100px;

`;

const ContentNavigation = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`

const LogoArea = styled.img`
    width : 34px;
    height : 34px;
    margin: auto 10px;

`

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  width : 400px;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;