import { usePosts } from '../../hooks/usePosts';
import PostItem from './PostItem';

function PostsList() {
  const { data } = usePosts('sort=publishedAt:DESC&populate=photo');

  return (
    <div>
      {data &&
        data.map(({ id, attributes }) => {
          return <PostItem id={id} attributes={attributes} key={id} />;
        })}
    </div>
  );
}

export default PostsList;
