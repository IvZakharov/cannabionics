import styles from './StepsBlock.module.scss';
import Range from '../Dropdown/Range';
import Dropdown from '../Dropdown/Dropdown';
import RangeRadio from '../Dropdown/RangeRadio';
import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepSeven() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title} mb-100`}>Input your data:</h1>
      <div className={styles.inputData}>
        <ul>
          <li>
            <span className={styles.name}>Avaliable Budget</span>
            <span className={styles.value}>
              <Range title={'AvalibleBudget'} />
            </span>
          </li>
          <li>
            <span className={styles.name}>Planning</span>
            <span className={styles.value}>
              <Dropdown title={'Planing'} dropdownList={['1 year']} />
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.prevNextBtns}>
        <button onClick={() => dispatch(countMinus())} className="button">
          &#60; back
        </button>
        <button onClick={() => dispatch(countPlus())} className="button">
          next &#62;
        </button>
      </div>
    </div>
  );
}

export default StepSeven;
