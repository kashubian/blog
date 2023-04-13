import useDocumentTitle from '../../hooks/useDocumentTitle';
import Container from '../common/Container';

import PostsList from '../PostsList';

function Home() {
  useDocumentTitle('Blog');

  return (
    <Container>
      <PostsList />
    </Container>
  );
}

export default Home;
