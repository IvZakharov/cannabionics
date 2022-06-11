import styles from './StepsBar.module.scss';

function StepsBar({ step, stepCount }) {
  return (
    <ul className={styles.stepsScrollbar}>
      {[...new Array(stepCount)].map((item, i) => (
        <li key={i} className={step === i ? `${styles.active}` : ''}></li>
      ))}
    </ul>
  );
}

export default StepsBar;
