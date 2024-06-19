import EditPost from '@/components/detailpage/editPost/EditPost';
import ReadPost from '@/components/detailpage/readPost/ReadPost';
import supabase from '@/supabase/supabaseClient';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [targetData, setTargetData] = useState({});
  const postId = useParams().id;

  useEffect(() => {
    const fetchThisData = async () => {
      const { data, error } = await supabase.from('posts').select('*').eq('id', postId).single();
      if (error) {
        console.log(error);
      } else {
        setTargetData(data);
      }
    };

    fetchThisData();
  }, []);
  return (
    <>{isEdit ? <EditPost setIsEdit={setIsEdit} /> : <ReadPost setIsEdit={setIsEdit} targetData={targetData} />}</>
  );
};