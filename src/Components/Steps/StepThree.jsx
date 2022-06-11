import styles from './StepsBlock.module.scss';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Range from '../Dropdown/Range';
import RangeTwo from '../Dropdown/RangeTwo';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepThree() {
  const dispatch = useDispatch();
  const dropdownData = [
    ['Seattle', 'Washington'],

    ['Males', 'Females'],

    ['21-25', '26-30', '31-40', '41-50', '51-70'],

    [
      'Beverage',
      'Capsules',
      'Concentrates',
      'Edible',
      'Flower',
      'Pre-Roll',
      'Tincture & Sublingual',
      'Topical',
      'Vapor Pens',
    ],
  ];

  return (
    <div className={styles.stepsBlock}>
      <h1 className={`${styles.title} mb-100`}>Tell us a bit more about your situation:</h1>

      <div className={`${styles.textBlock} mb-100`}>
        <p>I am a </p>
        <span>Founder</span>
        <p> of a </p>
        <Dropdown dropdownList={dropdownData[3]} />
        <p> brand in </p>
        <Dropdown dropdownList={dropdownData[0]} />
        <p> targeted at </p>
        <Dropdown dropdownList={dropdownData[1]} />
        <Dropdown dropdownList={dropdownData[2]} />
        <p>average monthly salary =</p>
        <Range />
        <p> with </p>
        <RangeTwo />
        <p> price per unit.</p>
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

export default StepThree;
