import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Message = () => (
  <div className={styles.message}>
    <div className={styles.info}>
      <div className={styles.from}>
        <img
          className={styles.image}
          src="https://avatars3.githubusercontent.com/u/6926451?s=460&v=4"
          alt="img"
        />
        <div className={styles.sender}>
          <div className={styles.senderName}>Jay Chung</div>
          <div>
            <span>{`To: `}</span>
            <span className={styles.senderEmail}>wuceh14678@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={["fas", "reply"]} className={styles.icon} />
        <FontAwesomeIcon icon={["far", "star"]} className={styles.icon} />
        <FontAwesomeIcon icon={["far", "trash-alt"]} className={styles.icon} />
      </div>
    </div>
    <div className={styles.title}>The challenge of learning Swedish</div>
    <p>
      Most Swedes speak English – which certainly helps a first-time visitor in
      Stockholm. But it makes learning Swedish somewhat harder, according to
      former expat Charlotte West.
    </p>
    <div className={styles.subtitle}>Newly arrived</div>
    <p>
      I arrived in Sweden in August 2002 armed with Prisma’s Abridged
      English-Swedish and Swedish-English Dictionary and an eight-week intensive
      Swedish course from the University of California at Berkeley behind me.
      Four years later, the dog-eared dictionary had grammar notes scribbled in
      the margins and I had become a fluent Swedish speaker, more or less.
    </p>
    <div className={styles.title}>Swedish Word of the Day</div>
    <p>
      A big part of the reason my spoken Swedish got good is that I quickly met
      Swedish friends who were willing to help me practise. One of our
      techniques was keeping track of our ‘Swedish Word of the Day’ on a list
      tacked to the kitchen cupboard.
    </p>
  </div>
);

export default Message;
