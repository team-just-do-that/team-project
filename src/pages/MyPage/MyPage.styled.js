import styled from 'styled-components';

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
`;

const StProfile = styled.div`
  width: 920px;
  height: 240px;
  padding: 16px;
  margin-top: 60px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfdff;
  display: flex;
`;

const StProfilePic = styled.img`
  height: 170px;
  width: 170px;
  margin: auto 0 auto 80px;
  border-radius: 50%;
  background-color: #f0f0f0;
  object-fit: cover;
`;

const StProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 30px;
`;

const StProfileName = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const StProfileIntro = styled.span`
  font-size: 20px;
  font-weight: 900;
  display: flex;
  align-items: center;
`;

const StProfileGame = styled.span`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-left: 5px;
  background-color: #2d2d2d;
  color: #fcfdff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const StButton = styled.div`
  margin: 0 0 auto auto;
  cursor: pointer;
`;

const StHomeSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

const StSlideSection = styled.section`
  height: 700px;
  background-color: #f4b061;
  display: flex;
  justify-content: center;
`;

const StCardsSection = styled.section`
  min-height: 300px;
  display: flex;
  justify-content: center;
`;

const StCardsCotainer = styled.div`
  display: flex;
  min-width: 1000px;
  margin-bottom: 10px;
  /* background-color: gray; */
`;

const StCardsAlignBtn = styled.button`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 10rem;
  height: 2.2rem;
  border-radius: 0.5rem;
  background-color: #fcfdff;
  color: #2d2d2d;
  font-weight: 700;
`;

const StCards = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 320px));
  grid-auto-rows: minmax(323px, 0);
  justify-content: space-between;
  row-gap: 60px;
`;

const StCard = styled.li`
  line-height: 1.5;
  background-color: #fcfdff;
  width: 320px;
  height: 323px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto 0 auto; */
  gap: 0.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  box-sizing: border-box;
  color: #000;
`;

const StCardImg = styled.img`
  background-color: black;
  width: 100%;
  height: 160px;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const StTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const StPlace = styled.p`
  font-size: 14px;
  font-weight: 900;
`;

const StContent = styled.p`
  line-height: 1.5;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const StContentNoImg = styled.p`
  line-height: 1.5;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

const StPostItem = styled.div`
  background-color: #2d2d2d;
  color: #fcfdff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0 0 auto;
  width: 5.5rem;
  height: 1.7rem;
  border-radius: 0.5rem;
`;

const StNoCard = styled.div`
  text-align: center;
`;

const StMyPost = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 50px;
`;
export {
  StButton,
  StCard,
  StCardImg,
  StCards,
  StCardsAlignBtn,
  StCardsCotainer,
  StCardsSection,
  StContent,
  StContentNoImg,
  StHomeSection,
  StMyPost,
  StNoCard,
  StPlace,
  StPostItem,
  StProfile,
  StProfileBox,
  StProfileGame,
  StProfileIntro,
  StProfileName,
  StProfilePic,
  StSection,
  StTitle
};

export const StCardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1 1 0;
`;

export const StUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StUserProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  object-fit: cover;
`;

export const StUsername = styled.p``;
