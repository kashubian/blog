import { useQuery } from '@tanstack/react-query';

import { API_URL } from '../../constants';
import Post from '../../types/post';

export const usePosts = (queryParams: string) => {
  const apiUrl = `${API_URL}/api/posts${queryParams ? `?${queryParams}` : ''}`;

  return useQuery<Post[]>(['posts'], () =>
    fetch(apiUrl)
      .then((response) => response.json())
      .then((body) => body.data)
  );
};
