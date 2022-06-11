import styles from './Header.module.scss';
import logoSvg from './img/logo.svg';
import userImg from './img/user.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <Link to="cannabionics/" className={styles.logo}>
          <img src={logoSvg} alt="logo icon" width={18} height={18} />
          <span>CANNABIONICS®</span>
        </Link>
        <nav className={styles.mainNav}>
          <ul>
            <li>HOW IT WORKS</li>
            <li>PRICING</li>
            <li>DATA HUB</li>
            <li>CONTACTS</li>
          </ul>
        </nav>
        <div className={styles.userBlock}>
          <img src={userImg} alt="user avatar" width={45} height={45} />
          <span>James Pumphrey</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
