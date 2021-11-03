import React, { useContext, useEffect } from "react";
import { OverlayContext } from "../../../../redux/reducer/index";
import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Overlay = (props) => {
  const { value, dispatchOverlay } = useContext(OverlayContext);
  useEffect(() => {
    console.log(`value`, value);
  }, []);

  const deactivateOverlay = () => {
    dispatchOverlay({
      type: "CLOSE_OVERLAY",
    });
  };
  return (
    <div className={value ? `${styles.overlayActive}` : `${styles.overlay}`}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <p className="text-2xl">
            Write an email to your <p className="text-pink-500">BFF</p>
          </p>
          <span className={styles.close} onClick={deactivateOverlay} />
        </div>
        <div className={"flex flex-col w-full p-5"}>
          <div className={"flex flex-col"}>
            <input
              type="text"
              placeholder="To"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
            />
            <div className="flex justify-items-end mt-3">
              <button
                className="bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 w-full rounded mr-4"
                onClick={deactivateOverlay}
              >
                <FontAwesomeIcon icon="sad-cry" className="mr-2" size="lg" />
                Cerrar
              </button>
              <button className="bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 w-full rounded ml-4">
                <FontAwesomeIcon icon="smile-wink" className="mr-2" size="lg" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
