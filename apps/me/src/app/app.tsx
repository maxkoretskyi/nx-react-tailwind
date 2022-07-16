import { Ui } from '@nx-react/ui';
import styles from './app.module.less';

export function App() {
  return (
    <>
      <h1 className={styles['r']}>
        Hello world!
      </h1>
      <Ui/>
    </>
  );
}

export default App;
