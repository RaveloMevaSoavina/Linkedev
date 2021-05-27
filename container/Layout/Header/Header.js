import React from 'react'
import Link from 'next/link'
import {NavigationBar,
        ContentNavigation,
        LogoArea,
        Search,
        SearchIcon,
        Nav,NavListWrap,NavList,User,SignOut,Work
} from './Header.style';
import ActiveLink from '../../../library/helpers/activeLink';
// import { HOME_PAGE, MY_NETWORK_PAGE } from '../../../settings/constants';




function Header({}) {
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
                <img src="static/images/user.svg" alt="" />
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
