import { usePosts } from '../../hooks/usePosts';
import PostItem from './PostItem';

function PostsList() {
  const { data } = usePosts('sort=publishedAt:DESC&populate=photo');

  return (
    <div>
      {data &&
        data.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
    </div>
  );
}

export default PostsList;
