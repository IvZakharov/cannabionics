import styles from './PlansForm.module.scss';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

function TellUs() {
  const dropdownData = [
    ['California(Los Angeles)', 'Washington(Seattle)'],

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
    <div className={styles.show}>
      <h1 className={`${styles.title} mb-100`}>Tell us a bit more about your situation:</h1>
      <div className={styles.textBlock}>
        <p>I am a </p>
        <span>Founder</span>
        <p> of a </p>
        <Dropdown dropdownList={dropdownData[3]} />
        <p> brand in </p>
        <Dropdown dropdownList={dropdownData[0]} />
        <p> targeted at </p>
        <Dropdown dropdownList={dropdownData[1]} />
        <p>, </p>
        <Dropdown dropdownList={dropdownData[2]} />
        <p>, MYI &#62; </p>
        <span>$45,000-$75,000</span>
        <p> for </p>
        <span>Anti-anxiety</span>
        <p> with </p>
        <span>$10-50</span>
        <p> price per unit.</p>
      </div>
    </div>
  );
}

export default TellUs;
