import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { usePostDetails } from '../../hooks/usePostDetails';
import Container from '../common/Container';
import Button from '../common/Button';

import styles from './PostDetails.module.scss';

function PostDetails() {
  const { id } = useParams();

  const { data } = usePostDetails(id as string);

  return (
    <Container>
      {data && (
        <>
          <Link to={'/'}>
            <Button className={styles.link}>Back</Button>
          </Link>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.lead}>{data.lead}</p>
          <hr />
          <ReactMarkdown children={data.body} />
        </>
      )}
    </Container>
  );
}

export default PostDetails;
