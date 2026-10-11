/**
 * @format
 */

import React, { act } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', async () => {
  await act(() => {
    ReactTestRenderer.create(<App />);
  });
});
