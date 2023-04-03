import { useEffect, useState } from 'react';

import { API_URL } from '../../constants';
import Post from '../../types/post';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Container from '../common/Container';

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useDocumentTitle('Blog');

  useEffect(() => {
    fetch(`${API_URL}/api/posts?sort=publishedAt:DESC`)
      .then((response) => response.json())
      .then((body) => setPosts(body.data));
  }, []);

  return (
    <Container>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <div className="row">
              <div className="col-9">
                <time dateTime={post.attributes.publishedAt}>
                  {post.attributes.publishedAt}
                </time>
                <h2>{post.attributes.title}</h2>
                <p>
                  {post.attributes.description.substring(0, 109)}
                  {post.attributes.description.length >= 109 && '...'}
                </p>
              </div>
              <div className="col-3">TODO add image</div>
            </div>
          </article>
        );
      })}
    </Container>
  );
}

export default Home;
