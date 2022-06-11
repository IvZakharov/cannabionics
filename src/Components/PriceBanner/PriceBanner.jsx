import styles from './PriceBanner.module.scss';

function PriceBanner() {
  return (
    <div className={styles.priceBanner}>
      <div className={`${styles.row} mb-140`}>
        <div className={styles.header}>
          <div>
            <h4 className="text-opacity fs-40 mb-10">65%</h4>
            <p className="fs-18 fw-500 text-opacity">
              Market share of Top 10 <br /> pre-roll brands in California
            </p>
          </div>
          <div>
            <h4 className="text-opacity fs-40 mb-10">$39M</h4>
            <p className="fs-18 fw-500 text-opacity">
              Yearly ad spend of Top 10 <br /> pre-roll brands in California
            </p>
          </div>
          <div>
            <h4 className="text-opacity fs-40 mb-10">518</h4>
            <p className="fs-18 fw-500 text-opacity">
              Avg. points of sale for Top 10 <br /> pre-roll brands in California
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.row}`}>
        <h2 className="fs-48 fw-500 primary mb-40">All-in-one kit to win your market</h2>
        <p className="fs-25 fw-500 primary mb-50">
          Get a complete action package for a price of <br /> an hour of your current consultant’s
          work
        </p>

        <div className={styles.advantages}>
          <div className={styles.row}>
            <div className={styles.item}>
              <h4 className="fs-17 fw-500 mb-10">Market Map</h4>
              <p className="fs-12 lh-18 fw-500 text-opacity">
                Data kit with everything you need to know to get up to speed and win your market.
                The map alone is a week of consultant’s fees!{' '}
              </p>
            </div>
            <div className={styles.item}>
              <h4 className="fs-17 fw-500 mb-10">Action plan</h4>
              <p className="fs-12 lh-18 fw-500 text-opacity">
                Move to achieving your goals one easy step after another. We have worked on tons of
                data so that you wouldn’t have to. Just do it!
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <h4 className="fs-17 fw-500 mb-10">Profit & Loss</h4>
              <p className="fs-12 lh-18 fw-500 text-opacity">
                Correct financial modelling is crucial for any idea that wants to survive as a
                business. Here’s where we got you fully covered.
              </p>
            </div>
            <div className={styles.item}>
              <h4 className="fs-17 fw-500 mb-10">Communication strategy</h4>
              <p className="fs-12 lh-18 fw-500 text-opacity">
                What, where & when to communicate to your target customers - based on the best
                practices and supported by lots of data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.priceLabel}>
        <h4 className="fs-32 fw-500 primary ta-center mb-40">Starting from</h4>
        <p className="fs-48 d-block fw-500 mb-35">
          $<span className="fs-108 fw-500">499</span>
        </p>
        <p className="fs-20 primary fw-500 d-block mb-50">per month</p>
        <button className="button button--black">CHOOSE YOUR PLAN &#62;</button>
      </div>
    </div>
  );
}

export default PriceBanner;
