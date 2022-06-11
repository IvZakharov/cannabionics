import styles from '../Components/Steps/StepsBlock.module.scss';
import people from '../Components/Steps/img/people.svg';
import expand from '../Components/Steps/img/expand.svg';
import segment from '../Components/Steps/img/segment.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function PackageSelection() {
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-60`}>Here’s your action package:</h2>

      <div className={`${styles.buttons} mb-60`}>
        <Link to="/action-plan" className={styles.button}>
          <h3 className="mb-50">Action plan</h3>
          <img src={segment} alt="" />
        </Link>
        <button disabled={true} className={styles.button}>
          <h3 className="mb-35">Profit and Loss</h3>
          <img src={expand} alt="" />
        </button>
        <button disabled={true} className={styles.button}>
          <h3 className="mb-35">Communications</h3>
          <img src={segment} alt="" />
        </button>
        <button disabled={true} className={styles.button}>
          <h3 className="mb-35">Market map</h3>
          <img src={expand} alt="" />
        </button>
      </div>

      <div className={styles.prevNextBtns}>
        <button className="button">I NEED HELP FROM A LIVE PROFESSIONAL &#62;</button>
      </div>
    </div>
  );
}

export default PackageSelection;
