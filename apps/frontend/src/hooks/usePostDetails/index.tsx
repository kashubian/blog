import { useQuery } from '@tanstack/react-query';

import { API_URL } from '../../constants';

export const usePostDetails = (id: string) => {
  const apiUrl = `${API_URL}/api/posts/${id}`;

  return useQuery(['post', id], () =>
    fetch(apiUrl)
      .then((response) => response.json())
      .then((body) => body.data)
  );
};
