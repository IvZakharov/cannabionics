import styles from './StepsBlock.module.scss';
import React from 'react';
import people from './img/people.svg';
import expand from './img/expand.svg';
import { useDispatch } from 'react-redux';
import { countPlus } from '../../redux/slices/stepsCountSlice';

function StepOne() {
  const [activeButton, setActiveButton] = React.useState(false);

  const dispatch = useDispatch();

  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-60`}>What would you like to do?</h2>

      <div className={`${styles.buttons} mb-60`}>
        <button
          onClick={() => setActiveButton(!activeButton)}
          className={`${styles.button} ${activeButton ? styles.active : ''}`}>
          <h3 className="mb-50">Ask Virtual CMO</h3>
          <img src={expand} alt="" />
        </button>
        <button disabled={true} className={styles.button}>
          <h3 className="mb-35">Browse top-rated pros</h3>
          <img src={people} alt="" />
        </button>
      </div>

      <div className={styles.prevNextBtns}>
        <button onClick={() => dispatch(countPlus())} disabled={!activeButton} className="button">
          next &#62;
        </button>
      </div>
    </div>
  );
}

export default StepOne;
