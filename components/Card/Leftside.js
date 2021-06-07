import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo src="/static/images/avatar1.jpg" alt=""/>
            <Link>RAVELO MEVA SOAVINA</Link>
          </a>
          <a>
            <JobTitle>DEVELOPPEUR WEB</JobTitle>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <WidgetItem>
                <span>Vues de votre profil</span>
                <span className="nombre">66</span>
              </WidgetItem>
              <WidgetItem>
                <span>Relation<br/>
                  <strong>Développez votre réseau</strong> 
                </span>
                <span className="nombre">528</span>
                
              </WidgetItem>
            </div>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="static/images/item-icon.svg" alt="" />
            Mes éléments
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
          En découvrir plus
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  width : 225px;
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

const Photo = styled.img`
  box-shadow: none;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 100%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const JobTitle = styled.div`
  color: #4448;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;
const WidgetItem = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  span {
    font-size: 12px;
    line-height: 1.333;
    text-align : left;
  }
  .nombre{
    color: #0a66c2;
    font-weight : bold;
  }
`
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.75);
    font-weight : bold;
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
      display : inline;
      text-align : center;
      font-weight : 600;
      font-size : 15px;
      line-height : 20px;
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
