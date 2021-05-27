import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <span>Ajouter à votre actualité</span>
          <img src="static/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button> <img src="static/images/plus-icon.svg" alt="" /> Suivre</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button> <img src="static/images/plus-icon.svg" alt="" /> Suivre</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          Voir toutes les suggestions
          <img src="static/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
      {/* <Footer>
        <ul>
          <li><a>Infos</a></li>
          <li><a>Accessibilité</a></li>
          <li><a>Assistance clientèle</a></li>
          <li><a>Conditions générales et confidentialité</a></li>
          <li><a>Préférences Pubs</a></li>
          <li><a>Publicité</a></li>
          <li><a>Solutions professionnnelles</a></li>
          <li><a>Téléchargez l'application LinkedIn</a></li>
          <li><a>Plus</a></li>
        </ul>
      </Footer> */}
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  width: 315px;
  
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: rgba(0, 0, 0, 0.9);
  span{
    font-size : 15px;
    font-weight : bold;
  }
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: rgba(0,0, 0, 0.9);
  display: flex;
  align-items: center;
  font-size: 14px;
  img{
    color : #000;
  }
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
const Footer = styled.div`
  width : 100%;
  ul{
    list-style-type : none;
    display : flex;
    flex-direction : row;
    flex-wrap : wrap
    li a{
      color : rgba(0, 0, 0, 0.6);
      font-size : 8px;
    }
  }
`

export default Rightside;
