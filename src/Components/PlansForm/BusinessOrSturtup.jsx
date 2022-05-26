import styles from './PlansForm.module.scss';

function BusinessOrSturtup() {
  return (
    <>
      <h1 className={`${styles.title} mb-100`}>
        Is it an existing business or are you just starting up?
      </h1>
      <div className={styles.formControl}>
        <input type="radio" id="business" defaultChecked name="radio" value="first"></input>
        <label htmlFor="business">I have an exisiting business</label>
      </div>

      <div className={styles.formControl}>
        <input type="radio" id="starting" name="radio" value="first"></input>
        <label htmlFor="starting">I’m just starting up</label>
      </div>
    </>
  );
}

export default BusinessOrSturtup;
