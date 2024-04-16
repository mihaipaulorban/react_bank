/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 sm:mr-5 md:mr-10">
    <img
      src={quotes}
      alt="quotes"
      className="h-[27px] w-[42px] object-contain"
    />
    <p className="my-10 font-poppins text-[18px] font-normal leading-[32px] text-white">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className="font-poppins text-[20px] font-semibold leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
