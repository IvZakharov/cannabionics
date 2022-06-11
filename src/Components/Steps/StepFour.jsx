import styles from './StepsBlock.module.scss';
import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepFour() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title} mb-100`}>What do you want to do?</h1>
      <div className="mb-60">
        <div className={styles.formControl}>
          <input type="radio" id="development" defaultChecked name="radio" value="first"></input>
          <label htmlFor="development">Market Development</label>
        </div>

        <div className={styles.formControl}>
          <input type="radio" id="penetration" name="radio" value="second"></input>
          <label htmlFor="penetration">Market Penetration</label>
        </div>

        <div className={styles.formControl}>
          <input type="radio" id="product" name="radio" value="Third"></input>
          <label htmlFor="product">Product Development</label>
        </div>

        <div className={styles.formControl}>
          <input type="radio" id="diversification" name="radio" value="fouth"></input>
          <label htmlFor="diversification">Diversification</label>
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

export default StepFour;
