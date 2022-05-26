import styles from './PlansForm.module.scss';
import React from 'react';
import segment from './img/segment.svg';
import expand from './img/expand.svg';
export const ShowExtendContext = React.createContext();

function HowDoYou({ check }) {
  const [active, setActive] = React.useState(0);

  return (
    <div className={styles.HowDoYou}>
      <h1 className={active > 2 ? `${styles.titleDisabled}` : `${styles.title}`}>
        How do you want to do it?
      </h1>
      {active > 2 ? <h1 className={styles.title}>Where do you want to expand?</h1> : null}
      {active < 2 ? (
        <div className={styles.buttons}>
          <div className={styles.button}>
            <h3>Step into new segments</h3>
            <img src={segment} alt="" width={346} height={150} />
          </div>
          <div
            onClick={function () {
              setActive(4);
            }}
            className={styles.button}>
            <h3>Expand geography</h3>
            <img src={expand} alt="" width={346} height={150} />
          </div>
        </div>
      ) : null}

      {active > 2 ? (
        <div className={styles.expand}>
          <h3>Pick a state:</h3>
          <span className={styles.active}>California</span>
          <span className={styles.another}>Add another state &#62;</span>
        </div>
      ) : null}
    </div>
  );
}

export default HowDoYou;
