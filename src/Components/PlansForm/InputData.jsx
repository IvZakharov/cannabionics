import styles from './PlansForm.module.scss';

function InputData() {
  return (
    <div className={styles.show}>
      <h1 className={styles.title}>Tell us a bit more about your situation:</h1>
      <div className={styles.inputData}>
        <ul>
          <li>
            <span className={styles.name}>Objective</span>
            <span className={styles.value}>Increase Market share</span>
          </li>
          <li>
            <span className={styles.name}>Goals</span>
            <span className={styles.value}>10%</span>
          </li>
          <li>
            <span className={styles.name}>Avaliable Budget</span>
            <span className={styles.value}>$25,000</span>
          </li>
          <li>
            <span className={styles.name}>ROI</span>
            <span className={styles.value}>130%</span>
          </li>
          <li>
            <span className={styles.name}>Planning</span>
            <span className={styles.value}>1 year</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InputData;
