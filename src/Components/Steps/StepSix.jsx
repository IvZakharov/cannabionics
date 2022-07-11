import styles from './StepsBlock.module.scss';
import Dropdown from '../Dropdown/Dropdown';
import RangeRadio from "../Dropdown/RangeRadio";
import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepSix() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title} mb-100`}>Goals:</h1>
      <div className={styles.inputData}>
        <ul>
          <li>
            <span className={styles.name}>Market Share</span>
            <span className={styles.value}>
              <Dropdown title={'MarketShare'} dropdownList={['10%', '20%', '30%']} />
            </span>
          </li>

          <li>
            <span className={styles.name}>Sales volume, untils</span>
            <span className={styles.value}>

              <RangeRadio
                title={'SalesVolumeUntils'}
                list={['0', '1-5', '6-10', '11-15', '16-20', '25']}
              />
            </span>
          </li>
          <li>
            <span className={styles.name}>Sales volume</span>
            <span className={styles.value}>
              <RangeRadio
                title={'SalesVolume'}
                list={['0', '1-5', '6-10', '11-15', '16-20', '25']}
              />
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

export default StepSix;
