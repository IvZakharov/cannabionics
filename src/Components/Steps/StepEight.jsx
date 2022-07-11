import styles from './StepsBlock.module.scss';

import RangeRadio from '../Dropdown/RangeRadio';
import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';
import { FormGroup } from '@mui/material';

import CheckboxList from '../Dropdown/CheckboxCustom';
import CheckboxCustom from "../Dropdown/CheckboxCustom";

function StepEight() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title} mb-100`}>Input your data:</h1>
      <div className={styles.inputData}>
        <ul>
          <li>
            <span className={styles.name}>Current market Share, volume</span>
            <span className={styles.value}>
              <RangeRadio title={'CurrentMarket'} list={['0', '0-5', '6-10']} />
            </span>
          </li>
          <li>
            <span className={styles.name}>Current Brand Awareness</span>
            <span className={styles.value}>

              <RangeRadio
                title={'CurrentBrandAwareness'}
                list={['None', 'Low', 'Market Avg', 'Above competition', 'Top on the market']}
              />
            </span>
          </li>

          <li className={'d-block'}>
            <span className={styles.name}>Licensing</span>
            <span className={styles.value}>
              <FormGroup className={'d-flex flex-direction-row'}>
                  <CheckboxCustom defCheck={false} title={'Distribution'} />
                <CheckboxCustom defCheck={true} title={'Manufacturing'} />
                <CheckboxCustom defCheck={false} title={'Retail'} />
                <CheckboxCustom defCheck={false} title={'Laboratory'} />

              </FormGroup>
            </span>
          </li>

          <li className={'d-block'}>
            <span className={styles.name}>Current recourse</span>
            <span className={styles.value}>
              <FormGroup className={'d-flex flex-direction-row'}>
                 <CheckboxCustom defCheck={false} title={'People'} />
                  <CheckboxCustom defCheck={false} title={'Transport'} />
                  <CheckboxCustom defCheck={false} title={'Warehouse'} />
                  <CheckboxCustom defCheck={false} title={'Production facility'} />
              </FormGroup>
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

export default StepEight;
