import { history } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const toDemo = () => history.push('/demo');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <span onClick={toDemo}>to demo</span>
    </div>
  );
}
