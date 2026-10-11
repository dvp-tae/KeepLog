/**
 * @format
 */

import React, { act } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import Flex from '../src/components/layout/Flex';
import Wrapper from '../src/components/layout/Wrapper';
import Button from '../src/components/common/Button';
import Text from '../src/components/common/Text';

test('renders the ported design-system components without crashing', async () => {
  await act(() => {
    ReactTestRenderer.create(
      <ThemeProvider>
        <Wrapper maxWidth={320} center padding={4} borderRadius={4} fullHeight>
          <Flex direction="column" gap={3} align="center" justify="space-between">
            <Flex.Item flex={1}>
              <Text variant="h3" color="primary08">
                KeepLog
              </Text>
            </Flex.Item>
            <Button color="primary08" size="medium" selected>
              <Text variant="button" color="surface">
                Start
              </Text>
            </Button>
          </Flex>
        </Wrapper>
      </ThemeProvider>,
    );
  });
});
