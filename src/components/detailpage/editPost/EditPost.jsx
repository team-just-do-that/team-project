import { addImage, getPost, updatePost } from '@/api/api.posts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditPlace } from '../editPlace/EditPlace';
import { StHr, StPostImage } from '../readPost/readPost.styled';
import {
  StButtonDiv,
  StContainer,
  StContentSection,
  StEditPlaceDiv,
  StInputDiv,
  StNowAddressDiv,
  StRecruitDiv,
  StTextAreaDiv,
  StLabel,
  StInput
} from './editPost.styled';

const EditPost = ({ setIsEdit }) => {
  const { data: targetData, isPending } = useQuery({
    queryKey: ['post'],
    queryFn: () => getPost(postId)
  });
  const { created_at, id, image_url, user_id, is_recruit, title, content } = targetData;

  const [recruit, setRecruit] = useState(is_recruit);
  const [isEditPlace, setIsEditPlace] = useState(false);

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newImage, setNewImage] = useState(image_url);

  const queryClient = useQueryClient();
  const { id: postId } = useParams();

  const updateImageHandler = async (e) => {
    e.preventDefault();
    const fileObj = e.target.files[0];
    const data = await addImage(fileObj);
    setNewImage(`https://hiovftevpmlwqfamjnpe.supabase.co/storage/v1/object/public/post_images/${data.path}`);
  };

  //게시글 수정
  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
  if (!targetData) {
    return <div>Loading...</div>;
  }

  const today = new Date();

  const updatePostHandler = (targetData) => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 전부 입력하세요.');
      return;
    }
    console.log(newTitle);
    updatePostMutation.mutate({
      created_at,
      is_recruit: recruit,
      address: localStorage.getItem('address'),
      title: newTitle,
      content: newContent,
      id,
      user_id,
      image_url: newImage,
      coordinate: {
        lat: localStorage.getItem('y'),
        lng: localStorage.getItem('x')
      }
    });

    setIsEdit(false);
    alert('수정 완료');
    localStorage.removeItem('address');
    localStorage.removeItem('x');
    localStorage.removeItem('y');
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!targetData) {
    return <div>No data</div>;
  }

  return (
    <StContainer>
      <StRecruitDiv $isRecruit={recruit}>
        <p>모집 현황 (클릭)</p>
        <button onClick={() => setRecruit(!recruit)}>{recruit ? '모집 완료' : '모집중'}</button>
      </StRecruitDiv>
      <StHr />

      <StInputDiv>
        <label>제목</label>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </StInputDiv>

      <StContentSection>
        {targetData.image_url ? <StPostImage src={newImage} alt="image" /> : null}
        <StLabel htmlFor="image">이미지 수정하기</StLabel>
        <StInput type="file" id="image" onChange={updateImageHandler} />
        <StTextAreaDiv>
          <label>내용</label>
          <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
        </StTextAreaDiv>
      </StContentSection>
      <StNowAddressDiv>
        {localStorage.getItem('address') && <p>현재 지정 위치 : {localStorage.getItem('address')}</p>}
      </StNowAddressDiv>
      <StEditPlaceDiv $isEditPlace={isEditPlace}>
        <button onClick={() => setIsEditPlace(!isEditPlace)}>위치 수정</button>
        {isEditPlace && <EditPlace setIsEditPlace={setIsEditPlace} />}
      </StEditPlaceDiv>

      <StButtonDiv>
        <button onClick={() => updatePostHandler(targetData)}>수정 완료</button>
        <button onClick={() => setIsEdit(false)}>취소</button>
      </StButtonDiv>
    </StContainer>
  );
};

export default EditPost;
