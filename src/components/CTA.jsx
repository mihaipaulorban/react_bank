/* eslint-disable no-unused-vars */
import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
  >
    <div className="flex flex-1 flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div
      className={`${styles.flexCenter} ml-0 mt-10 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 sm:ml-10 sm:mt-0`}
    >
      <Button />
    </div>
  </section>
);

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
