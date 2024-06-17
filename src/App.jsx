import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <Globalstyle />
    </>
  );
}

export default App;
