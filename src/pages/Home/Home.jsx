import { getPosts } from '@/api/api.posts';
import img from '@/assets/mainitem.png';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  StCard,
  StCardImg,
  StCards,
  StCardsAlignBtn,
  StCardsCotainer,
  StCardsSection,
  StContent,
  StContentNoImg,
  StDiv,
  StHomeSection,
  StPlace,
  StPostItem,
  StSlideSection,
  StTitle
} from './Home.styled';

export const Home = () => {
  const {
    data: posts,
    isPending,
    isError
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return (
    <StDiv>
      <StHomeSection>
        <StSlideSection>
          <img src={img} />
        </StSlideSection>
        <StCardsSection>
          <StCardsCotainer>
            <StCardsAlignBtn>▼ 최신순</StCardsAlignBtn>
            {posts && posts.length ? (
              <StCards>
                {posts.map((post) => {
                  return (
                    <Link style={{ textDecoration: 'none' }} key={post.id} to={`/detail/${post.id}`}>
                      <StCard>
                        {post.image_url && <StCardImg src={post.image_url} />}
                        <StTitle>{post.title}</StTitle>
                        <StPlace>{post.address}</StPlace>
                        {post.image_url ? (
                          <StContent>{post.content}</StContent>
                        ) : (
                          <StContentNoImg>{post.content}</StContentNoImg>
                        )}

                        <StPostItem>모집중</StPostItem>
                      </StCard>
                    </Link>
                  );
                })}
              </StCards>
            ) : (
              <StNoCard>작성된 게시물이 없습니다.</StNoCard>
            )}
            ;
          </StCardsCotainer>
        </StCardsSection>
      </StHomeSection>
    </StDiv>
  );
};
