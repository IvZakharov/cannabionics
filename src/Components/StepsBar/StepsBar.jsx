import styles from './StepsBar.module.scss';

function StepsBar({ step }) {
  return (
    <ul className={styles.stepsScrollbar}>
      {[...new Array(7)].map((item, i) => (
        <li key={i} className={step === i ? `${styles.active}` : ''}></li>
      ))}
    </ul>
  );
}

export default StepsBar;
