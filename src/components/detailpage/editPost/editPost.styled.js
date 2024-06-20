import styled from 'styled-components';

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  height: auto;
  margin: 60px auto;
  padding: 1.2rem 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  & label {
    /* font-weight: bold; */
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  & input {
    width: 86%;
    margin-bottom: 1rem;
  }
`;

export const StInputDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StRecruitDiv = styled.div`
  & button {
    width: 6rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    margin: 1rem 0;
    background: none;
    color: ${(props) => (props.$isRecruit ? '#12B886' : '#f2b564')};
    border: 1px solid;
    cursor: pointer;
  }
`;

export const StEditPlaceDiv = styled.div`
  & button {
    /* background-color: #fcfdff; */
    background-color: ${(props) => (props.$isEditPlace ? '#fcfdff' : '#2d2d2d')};
    color: ${(props) => (props.$isEditPlace ? '#2d2d2d' : '#fcfdff')};
    border-radius: 1rem;
    width: 6rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
  }
`;

export const StContentSection = styled.div`
  display: flex;
  flex-direction: column;

  & textarea {
    resize: none;
    width: 95%;
    height: 20vh;
    margin-top: 2rem;
  }
`;

export const StButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  margin: 1.5rem;
  & button {
    background-color: #2d2d2d;
    color: #fcfdff;
    border-radius: 0.5rem;
    width: 90px;
    height: 32px;
  }
`;
