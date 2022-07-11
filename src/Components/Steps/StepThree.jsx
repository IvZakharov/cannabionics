import styles from './StepsBlock.module.scss';
import {useEffect} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Range from '../Dropdown/Range';
import RangeRadio from '../Dropdown/RangeRadio';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';
import {addItems} from '../../redux/slices/recomendationsSlice';


function StepThree() {
  const dispatch = useDispatch();


  const dropdownData = [
    ['Seattle', 'Washington'],

    ['Stoners', 'Estets', 'Glamour'],


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
        <Dropdown title={'Role'} dropdownList={dropdownData[2]} />
        <p> brand in </p>
        <Dropdown title={'City'} dropdownList={dropdownData[0]} />
        <p> targeted at </p>
        <Dropdown title={'Segment'} dropdownList={dropdownData[1]} />


        <p> with </p>
        <Dropdown title={'pricePerUnit'} dropdownList={['10-20', '20-50', '50-100', 'Unknown']} />
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
