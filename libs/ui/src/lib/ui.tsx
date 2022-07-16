import styles from './ui.module.less';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['c']}>
      <h1>Welcome to Ui!</h1>
    </div>
  );
}

export default Ui;
