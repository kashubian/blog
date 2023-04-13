import { renderHook } from '@testing-library/react-hooks';

import useDocumentTitle from '.';

it('should set given document title', () => {
  const title = 'Test Title';
  renderHook(() => useDocumentTitle(title));
  expect(document.title).toBe(title);
});
