import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from 'react-query';
const { QueryClient } = require('@tanstack/react-query');

const queryClient = new QueryClient();

export const QueryProvider = (children) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
