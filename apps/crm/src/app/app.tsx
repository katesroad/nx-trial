import NxWelcome from './nx-welcome';

import { Button, Components } from '@nx/components';
import Nasa from './components/Nasa';

import './app.scss';

export function App() {
  return (
    <main>
      <div style={{ width: '120px' }}>
        <Nasa />
        <Button>Hello</Button>
        <Components />
      </div>
      <NxWelcome title="crm" />
      <div />
    </main>
  );
}

export default App;
