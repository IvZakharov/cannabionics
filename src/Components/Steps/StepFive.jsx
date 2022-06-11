import styles from './StepsBlock.module.scss';
import React from 'react';
import segment from './img/segment.svg';
import expand from './img/expand.svg';
import people from './img/people.svg';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepFive() {
  const [activeButton, setActiveButton] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.stepsBlock}>
      <h1 className={activeButton ? `${styles.titleDisabled}` : `${styles.title}`}>
        How do you want to do it?
      </h1>
      {activeButton && <h2 className={styles.title}>Where do you want to expand?</h2>}
      {!activeButton ? (
        <div className={`${styles.buttons} mb-60 mt-60`}>
          <button
            onClick={() => setActiveButton(!activeButton)}
            className={`${styles.button} ${activeButton ? styles.active : ''}`}>
            <h3 className="mb-50">New geography</h3>
            <img src={expand} alt="" />
          </button>
          <button disabled={true} className={styles.button}>
            <h3 className="mb-35">New audience</h3>
            <img src={people} alt="" />
          </button>
          <button disabled={true} className={styles.button}>
            <h3 className="mb-50">New product</h3>
            <img src={segment} alt="" />
          </button>
        </div>
      ) : null}

      {activeButton ? (
        <div className={`${styles.expand} mb-60`}>
          <h3>Pick a state:</h3>
          <span className={styles.active}>California</span>
          <span className={styles.another}>Add another state &#62;</span>
        </div>
      ) : null}

      <div className={styles.prevNextBtns}>
        <button onClick={() => dispatch(countMinus())} className="button">
          &#60; back
        </button>

        {activeButton && (
          <button onClick={() => dispatch(countPlus())} className="button">
            next &#62;
          </button>
        )}
      </div>
    </div>
  );
}

export default StepFive;
