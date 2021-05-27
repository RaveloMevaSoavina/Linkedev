import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>RAVELO MEVA SOAVINA</Link>
          </a>
          <a>
            <AddPhotoText>DEVELOPPEUR WEB</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Vues de votre profil</span>
              <span>Relation</span>
              <span>Développez votre réseau</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            Accedez à des infos et des outils exclusifs
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groupes</span>
        </a>
        <a>
          <span>
            Evenements
            <img src="static/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Hashtags suivis</span>
        </a>
        <a>
          <span>En découvrir plus</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  width : 225px;
  margin-left : 25px;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("static/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("static/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: #0a66c2;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;

    &:hover {
      text-decoration : underline;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 16px;
      span{
        text-align : center;
        font-weight : bold;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

// const EnDecovrirPlus = styled.a`
//   width : 225px;
//   display : block;
//   padding : 10px;
//   font-weight : bold;
//   font-size : 20px;
//   span{
//     text-align : center;
//   }
// `

export default Leftside;
