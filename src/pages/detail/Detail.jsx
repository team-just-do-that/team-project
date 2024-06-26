import { getUser } from '@/api/api.auth';
import EditPost from '@/components/detailpage/editPost/EditPost';
import ReadPost from '@/components/detailpage/readPost/ReadPost';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const postId = useParams().id;

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  });

  //유저 정보 받아오기
  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return <>{isEdit ? <EditPost setIsEdit={setIsEdit} /> : <ReadPost setIsEdit={setIsEdit} userInfo={userInfo} />}</>;
};
