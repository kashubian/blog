import { useQuery } from '@tanstack/react-query';

import { API_URL } from '../../constants';
import Post from '../../types/post';

export const usePostDetails = (id: string) => {
  const apiUrl = `${API_URL}/api/posts/${id}`;

  return useQuery<Post>(['post', id], () =>
    fetch(apiUrl)
      .then((response) => response.json())
      .then((body) => body.data)
  );
};
