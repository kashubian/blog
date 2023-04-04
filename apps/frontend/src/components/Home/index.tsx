import useDocumentTitle from '../../hooks/useDocumentTitle';
import Container from '../common/Container';
import { usePosts } from '../../hooks/usePosts';

function Home() {
  const { data } = usePosts('sort=publishedAt:DESC');
  useDocumentTitle('Blog');

  return (
    <Container>
      {data &&
        data.map(({ id, attributes }) => {
          return (
            <article key={id}>
              <div className="row">
                <div className="col-9">
                  <time dateTime={attributes.publishedAt}>
                    {attributes.publishedAt}
                  </time>
                  <h2>{attributes.title}</h2>
                  <p>
                    {attributes.description.substring(0, 300)}
                    {attributes.description.length >= 300 && '...'}
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
