import { API_URL } from '../../../constants';
import Post from '../../../types/post';
import PostPublishDate from './PostPublishDate';
import PostAdditionalInfo from './PostAdditionalInfo';

import styles from './PostItem.module.scss';

function PostItem({ attributes, id }: Post) {
  return (
    <article className={styles.article}>
      <div className="row">
        <div className="col-8">
          <PostPublishDate publishedAt={attributes.publishedAt} />
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
      </div>
      <PostAdditionalInfo
        label={attributes.label}
        estimatedReadingTime={attributes.estimatedReadingTime}
      />
    </article>
  );
}

export default PostItem;
