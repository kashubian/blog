import { Link } from 'react-router-dom';

import { API_URL } from '../../../constants';
import Post from '../../../types/post';
import PostPublishDate from './PostPublishDate';
import PostAdditionalInfo from './PostAdditionalInfo';

import styles from './PostItem.module.scss';

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  const { publishedAt, title, lead, photo, label, estimatedReadingTime, id } =
    post;
  return (
    <article className={styles.article}>
      <Link to={`/post/${id}`} className={styles.link}>
        <div className="row">
          <div className="col-8">
            <PostPublishDate publishedAt={publishedAt} />
            <h2 className={styles.heading}>{title}</h2>
            {lead && (
              <p className={styles.lead}>
                {lead.substring(0, 300)}
                {lead.length >= 300 && '...'}
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
      </Link>
      <PostAdditionalInfo
        label={label}
        estimatedReadingTime={estimatedReadingTime}
      />
    </article>
  );
}

export default PostItem;
