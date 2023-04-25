import { Link } from 'react-router-dom';
import format from 'date-fns/format';

import { API_URL } from '../../../constants';
import Post from '../../../types/post';

import styles from './PostItem.module.scss';

function PostItem({ attributes, id }: Post) {
  return (
    <article className={styles.article}>
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
              src={API_URL + attributes.photo.data.attributes.url}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.articleInfo}>
              <Link to="/" className={styles.label}>
                {attributes.label}
              </Link>
              <div className={styles.readingTime}>
                {attributes.estimatedReadingTime} min read
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
