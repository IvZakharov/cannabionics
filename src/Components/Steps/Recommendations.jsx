import styles from './StepsBlock.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PriceBanner from '../PriceBanner/PriceBanner';
import { useSelector } from 'react-redux';

function Recommendations() {
  const [isRecomendation, setIsRecomendation] = React.useState(false);
  const recomendationsData = useSelector((state) => state.recomendations.data);
  const [score, setScore] = React.useState(0);
  const [budgetDisplay, setBudgetDisplay] = React.useState(0);
  const [scoreColor, setScoreColor] = React.useState('red');
  const [avalibleBudget, setAvalibleBudget] = React.useState(0);


  React.useEffect(() => {
    const startBudget = recomendationsData.find((obj) => obj.type === 'AvalibleBudget');
    let budget = startBudget.payload;
    let marketing = startBudget.payload / 100 * 5;
    const BrandAwareness = recomendationsData.find((obj) => obj.type === 'CurrentBrandAwareness');


    if (BrandAwareness.payload === 'None') {
      marketing *= 2
    } else if (BrandAwareness.payload === 'Low') {
      marketing *= 1.2
    } else if (BrandAwareness.payload === 'Above competition') {
      marketing *= 0.8
    } else if (BrandAwareness.payload === 'Top on the market') {
      marketing *= 0.5
    }

    const people = recomendationsData.find(obj => obj.type === 'People');
    if (!people.payload) {
      budget -= startBudget.payload / 100 * 20;
    }

    const transport = recomendationsData.find(obj => obj.type === 'Transport');
    if (!transport.payload) {
      budget -= startBudget.payload / 100 * 5;
    }

    const warehouse = recomendationsData.find(obj => obj.type === 'Warehouse');
    if (!warehouse.payload) {
      budget -= startBudget.payload / 100 * 5;
    }

    const production = recomendationsData.find(obj => obj.type === 'Production facility');
    if (!production.payload) {
      budget -= startBudget.payload / 100 * 5;
    }

    const distribution = recomendationsData.find(obj => obj.type === 'Distribution');
    if (!distribution.payload) {
      budget -= 100000
    }

    const manufacturing = recomendationsData.find(obj => obj.type === 'Manufacturing');
    if (!manufacturing.payload) {
      budget -= 100000
    }

    const retail = recomendationsData.find(obj => obj.type === 'Retail');
    if (!retail.payload) {
      budget -= 100000
    }

    const laboratory = recomendationsData.find(obj => obj.type === 'Laboratory');
    if (!laboratory.payload) {
      budget -= 100000
    }

    console.log(budget)

    if (budget <= -100000) {
      setScore(0)
    } else if (budget > -100000 && budget < 0) {
      const scoreCalc = Math.round(budget / 1000) * -1;
      setScore(100 - scoreCalc)
    } else if (budget => 0) {
      setScore(90)
    }

    if (score > 50) {
      setScoreColor('yellow')
    } else if (score > 80) {
      setScoreColor('green')
    }

    setAvalibleBudget(startBudget.payload)
    setBudgetDisplay(budget)
  }, []);

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
              <p className={`${styles.percent} ${scoreColor} mb-25`}>
                {`${score}%`}
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
          <p>If you extend your budget to</p>
          <span>{avalibleBudget}</span>
          <p>it will take</p>
          <span>1 year </span>
          <p>to achieve</p>
          <span>10% Market Share</span>
          <p>in your category in </p> <span>California.</span>
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
          <Link to="/cannabionics/package-selection" className="button ">
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
