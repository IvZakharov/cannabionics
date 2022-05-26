import styles from './PlansForm.module.scss';

function Recommendations({ step }) {
  return (
    <div className={styles.show}>
      <h1 className={styles.title}>Recommendations</h1>
      <div className={styles.recommendations}>
        <div className={styles.content}>
          <p className="mb-20">
            In order to launch a <span>Pre-Rolls</span> brand in <span>California</span> with an
            average price of <span>$10-50</span>
          </p>
          <p className="mb-20">
            targeted at <span>Male</span> , <span>21-25</span> , with Average Monthly Salary =
            <span>$3,000</span>
          </p>
          <p className="mb-20">
            You will need extra <span>$180,000 budget</span>
          </p>
          <p className="mb-20">
            that will enable you to reach market share in California <span>10% </span>
          </p>
          <p className="mb-50">
            and ROI <span>110%</span>
          </p>
          <p>
            Goal feasibility: <span>20%</span>
          </p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className="button">GET ACTION PLAN</button>

        <button className="button">DOWNLOAD</button>

        <button className="button button--transparent">BACK TO STEP 1 &#62;</button>
      </div>
    </div>
  );
}

export default Recommendations;
