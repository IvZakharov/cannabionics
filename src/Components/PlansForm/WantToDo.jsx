import styles from './PlansForm.module.scss';

function WantToDo() {
  return (
    <div className={styles.show}>
      <h1 className={`${styles.title} mb-100`}>What do you want to do?</h1>
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
  );
}

export default WantToDo;
