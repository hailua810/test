import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
  document.title = 'Áo cưới Romantic Love';
  return (
    <div className={cx('wrapper')}>
      Home <br />
      <Link to="/abc">ABC</Link>
    </div>
  );
}

export default Home;
