/* eslint-disable no-unused-vars */
import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} min-w-[120px] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-200 sm:min-w-[192px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="w-[100px] object-contain sm:w-[192px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
