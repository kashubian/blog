import { Link } from 'react-router-dom';

import styles from './PostAdditionalInfo.module.scss';

type PostAdditionalInfoProps = {
  label: string;
  estimatedReadingTime: number;
};

function PostAdditionalInfo({
  label,
  estimatedReadingTime,
}: PostAdditionalInfoProps) {
  return (
    <div className="row">
      <div className="col">
        <div className={styles.articleInfo}>
          <Link to="/" className={styles.label}>
            {label}
          </Link>
          <div className={styles.readingTime}>
            {estimatedReadingTime} min read
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostAdditionalInfo;
