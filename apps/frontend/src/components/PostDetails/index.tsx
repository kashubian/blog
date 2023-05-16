import { useParams } from 'react-router-dom';

import { usePostDetails } from '../../hooks/usePostDetails';
import Container from '../common/Container';

import styles from './PostDetails.module.scss';

function PostDetails() {
  const { id } = useParams();

  const { data } = usePostDetails(id as string);

  return (
    <Container>
      {data && (
        <>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.description}>{data.description}</p>
        </>
      )}
    </Container>
  );
}

export default PostDetails;
