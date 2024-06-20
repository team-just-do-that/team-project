import { getPosts } from '@/api/api.posts';
import img from '@/assets/mainitem.png';
import { useInfiniteQuery } from '@tanstack/react-query';
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
  StNoCard,
  StPlace,
  StPostItem,
  StSlideSection,
  StTitle
} from './Home.styled';

const ITEMS_PER_PAGE = 3;

export const Home = () => {
  // const {
  //   data: posts,
  //   isPending,
  //   isError
  // } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: getPosts
  // });

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error
  } = useInfiniteQuery({
    queryKey: ['posts'],
    initialPageParam: 1,
    // 되는거
    // queryFn: ({ pageParam }) => getPosts(pageParam, ITEMS_PER_PAGE),
    queryFn: async ({ pageParam }) => {
      const response = await getPosts(pageParam, ITEMS_PER_PAGE);
      return {
        posts: response.posts,
        totalPages: Math.ceil(response.postsLength / ITEMS_PER_PAGE)
      };
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const nextPage = lastPageParam + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    select: ({ pages }) => {
      return pages.map((postsPerPage) => postsPerPage.posts).flat();
    }
  });

  console.log(posts);

  if (isPending) return <div>Loading...</div>;

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

                        <StPostItem>{post.is_recruit ? '모집 완료' : '모집중'}</StPostItem>
                      </StCard>
                    </Link>
                  );
                })}
              </StCards>
            ) : (
              <StNoCard>작성된 게시물이 없습니다.</StNoCard>
            )}
            {hasNextPage && (
              <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                더 불러오기
              </button>
            )}
          </StCardsCotainer>
        </StCardsSection>
      </StHomeSection>
    </StDiv>
  );
};
