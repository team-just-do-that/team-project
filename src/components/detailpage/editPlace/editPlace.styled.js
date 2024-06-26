import styled from 'styled-components';

export const StContainer = styled.div`
  width: 98%;
  box-sizing: border-box;
`;

export const StWrap = styled.div`
  display: flex;
  width: 100%;
`;
export const StMapContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const StPlaceListDiv = styled.div`
  width: 22%;
  height: 38rem;
  position: absolute;
  z-index: 10;
`;
export const StEditButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 1rem;
  margin-bottom: 2rem;
`;
export const StEditButton = styled.button`
  width: 5.3rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #2d2d2d;
  color: #fcfdff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

export const StPlaceDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 2.3rem;
    border-radius: 1rem;
    border: 1px solid #fcfdff;
    background-color: #2d2d2d;
    color: #fcfdff;
  }
  & button {
    margin-top: 20px;
    height: 2.4rem;
  }
`;

export const StSelectPlaceInfoPreview = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
`;

export const StPlaceInfoTitle = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  padding: 1rem 0;
`;

export const StPlaceInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const StInfoContentP = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
