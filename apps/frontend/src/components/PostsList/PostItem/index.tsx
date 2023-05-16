import { API_URL } from '../../../constants';
import Post from '../../../types/post';
import PostPublishDate from './PostPublishDate';
import PostAdditionalInfo from './PostAdditionalInfo';

import styles from './PostItem.module.scss';

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  const {
    publishedAt,
    title,
    description,
    photo,
    label,
    estimatedReadingTime,
  } = post;
  return (
    <article className={styles.article}>
      <div className="row">
        <div className="col-8">
          <PostPublishDate publishedAt={publishedAt} />
          <h2 className={styles.heading}>{title}</h2>
          {description && (
            <p className={styles.description}>
              {description.substring(0, 300)}
              {description.length >= 300 && '...'}
            </p>
          )}
        </div>
        <div className="col-4">
          <div className={styles.photo}>
            <img
              className={styles.photo__wrapper}
              src={API_URL + photo.url}
              alt=""
            />
          </div>
        </div>
      </div>
      <PostAdditionalInfo
        label={label}
        estimatedReadingTime={estimatedReadingTime}
      />
    </article>
  );
}

export default PostItem;
