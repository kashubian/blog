import format from 'date-fns/format';

import styles from './PostPublishDate.module.scss';

type PostPublishDateProps = {
  publishedAt: string;
};

function PostPublishDate({ publishedAt }: PostPublishDateProps) {
  return (
    <time className={styles.publishedAt} dateTime={publishedAt}>
      {format(new Date(publishedAt), 'PP')}
    </time>
  );
}

export default PostPublishDate;
