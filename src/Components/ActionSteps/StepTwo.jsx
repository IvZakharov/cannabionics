import styles from './StepsBlock.module.scss';
import segment from './img/segment.svg';

import { useDispatch } from 'react-redux';
import { countPlus } from '../../redux/slices/stepsCountSlice';

function StepTwo() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-40">Do you have licence?</p>
      <div className={`${styles.buttons} mb-60`}>
        <button onClick={() => dispatch(countPlus())} className={styles.button}>
          <h3 className="mb-50">File application</h3>
          <img src={segment} alt="" />
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
