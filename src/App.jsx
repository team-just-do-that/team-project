import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { QueryProvider } from './query/QueryProvider';
import { router } from './routes/router';

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <Globalstyle />
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </>
  );
}

export default App;
