import styles from './StepsBlock.module.scss';
import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepTwo() {
  const dispatch = useDispatch();

  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title} mb-100`}>
        Is it an existing brand or are you just starting up?
      </h1>
      <div className={`${styles.content}  mb-60`}>
        <div className={styles.formControl}>
          <input type="radio" id="business" defaultChecked name="radio" value="first"></input>
          <label htmlFor="business">I have an exisiting business</label>
        </div>

        <div className={styles.formControl}>
          <input type="radio" id="starting" name="radio" value="first"></input>
          <label htmlFor="starting">I’m just starting up</label>
        </div>
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

export default StepTwo;
