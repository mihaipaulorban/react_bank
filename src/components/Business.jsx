/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

// Card for Reuse
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 font-poppins text-[18px] font-semibold leading-[22px] text-white">
        {title}
      </h4>
      <p className="mb-1 font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business,
        <br className="hidden sm:block" /> we&apos;ll handle the money.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
