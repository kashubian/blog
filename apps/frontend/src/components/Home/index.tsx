import format from 'date-fns/format';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import Container from '../common/Container';
import { usePosts } from '../../hooks/usePosts';
import { API_URL } from '../../constants';

import styles from './Home.module.scss';

function Home() {
  const { data } = usePosts('sort=publishedAt:DESC&populate=photo');
  useDocumentTitle('Blog');

  return (
    <Container>
      {data &&
        data.map(({ id, attributes }) => {
          return (
            <article className={styles.article} key={id}>
              <div className="row">
                <div className="col-8">
                  <time
                    className={styles.publishedAt}
                    dateTime={attributes.publishedAt}
                  >
                    {format(new Date(attributes.publishedAt), 'PP')}
                  </time>
                  <h2 className={styles.heading}>{attributes.title}</h2>
                  <p className={styles.description}>
                    {attributes.description.substring(0, 300)}
                    {attributes.description.length >= 300 && '...'}
                  </p>
                </div>
                <div className="col-4">
                  <div className={styles.photo}>
                    <img
                      className={styles.photo__wrapper}
                      src={API_URL + attributes.photo?.data?.attributes?.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </Container>
  );
}

export default Home;
