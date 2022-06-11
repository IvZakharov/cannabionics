import styles from './StepsBlock.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PriceBanner from '../PriceBanner/PriceBanner';

function Recommendations() {
  const [isRecomendation, setIsRecomendation] = React.useState(false);

  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title}`}>Recommendations</h1>
      <div className={`${styles.recommendations} mb-100`}>
        <div className={`${styles.row} mb-80`}>
          <p className="tt-up fw-500 fs-17 primary mb-20 d-block">BRAND</p>
          <p>
            <span className="fs-48 fw-500 primary mr-20">Spliffasowsky</span>
            <span className="text">Pre-Rolls in California</span>
          </p>
        </div>

        <div className={`${styles.row} mb-100`}>
          <p className="tt-up fs-17 fw-500 primary mb-20 d-block">OBJECTIVE</p>
          <p className="fs-48 fw-500">
            <span className="primary">Increase Market Share </span>to
            <span className="primary"> 10% </span>in <span className="primary">1 year</span>
          </p>
        </div>

        <div className={`${styles.row} mb-70`}>
          <p className="tt-up fs-17 fw-500 primary mb-20 d-block">SCORE</p>
          <div className="d-flex gap-135">
            <div>
              <p className={`${styles.percent} ${isRecomendation ? 'green' : 'red'} red mb-25`}>
                {isRecomendation ? '80%' : '20%'}
              </p>
              <p className="fs-32 fw-500 primary">Goal feasibility</p>
            </div>
            <div>
              <p className="text fw-500 fs-24 d-block mb-35">
                It seems you will struggle to achieve your goal <br /> with current resources.
              </p>
              <button
                onClick={() => setIsRecomendation(true)}
                disabled={isRecomendation}
                className="button button--transparent button--short">
                SUGGEST RECOMMENDED RESOURCES
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.textBlock} mb-80`}>
          <p>With your current product and</p>{' '}
          <span>{isRecomendation ? '1 years' : '4 years'} </span>{' '}
          <p>budget it will take at least</p>{' '}
          <span>{isRecomendation ? '$180,000' : '$25,000'}</span> <p>to achieve </p>{' '}
          <span>10% Market Share</span> <p>in your category in </p> <span>California.</span>
        </div>

        <div className={`${styles.row} mb-60`}>
          <div className="d-flex gap-150">
            <div>
              <p className="fs-17 tt-up fw-500 mb-40 primary">CRITICAL SUCCESS FACTORS</p>
              <ul>
                <li className="fs-24 fw-500 mb-20 primary">Pricing</li>
                <li className="fs-24 fw-500 mb-20 primary">Logistics costs</li>
                <li className="fs-24 fw-500 mb-20 primary">Availability in Retail</li>
              </ul>
            </div>
            <div>
              <p className="fs-17 tt-up fw-500 mb-40 primary">CRITICAL SUCCESS FACTORS</p>
              <ul>
                <li className="fs-24 fw-500 mb-20 primary">Pricing</li>
                <li className="fs-24 fw-500 mb-20 primary">Logistics costs</li>
                <li className="fs-24 fw-500 mb-20 primary">Availability in Retail</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.prevNextBtns}>
          <Link to="package-selection" className="button ">
            GET FULL ACTION PACKAGE
          </Link>
          <button className="button button--transparent button--short">
            GET FULL ACTION PACKAGE
          </button>
        </div>
      </div>

      <PriceBanner />
    </div>
  );
}

export default Recommendations;
