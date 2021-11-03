import React, { useContext, useEffect, useState } from "react";
import { OverlayContext } from "../../../../redux/reducer/index";
import { AuthContext } from "../../../../auth/AuthContext";
import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendEmail } from "../../../../api/email";

export const Overlay = (props) => {
  const { user } = useContext(AuthContext);
  const { value, dispatchOverlay } = useContext(OverlayContext);
  const [subject, setSubject] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const deactivateOverlay = () => {
    dispatchOverlay({
      type: "CLOSE_OVERLAY",
    });
  };

  const sendEmailHandler = async () => {
    try {
      const payload = {
        sender: user.email,
        receiver,
        subject,
        body: message,
        date: new Date(),
        summary: message.substring(0, 50),
      };
      const response = await sendEmail(payload, user.id, user.accessToken);
      console.log(`response`, response);
      if (response.status === 200) {
        dispatchOverlay({
          type: "CLOSE_OVERLAY",
        });
      }
    } catch (error) {}
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleReceiverChange = (event) => {
    setReceiver(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className={value ? `${styles.overlayActive}` : `${styles.overlay}`}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <p className="text-2xl">
            Write an email to your <span className="text-pink-500">BFF</span>
          </p>
          <span className={styles.close} onClick={deactivateOverlay} />
        </div>
        <div className={"flex flex-col w-full p-5"}>
          <div className={"flex flex-col"}>
            <input
              type="text"
              placeholder="To"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              onChange={handleReceiverChange}
            />
            <input
              type="text"
              placeholder="Subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              onChange={handleSubjectChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              onChange={handleMessageChange}
            />
            <div className="flex justify-items-end mt-3">
              <button
                className="bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 w-full rounded mr-4"
                onClick={deactivateOverlay}
              >
                <FontAwesomeIcon icon="sad-cry" className="mr-2" size="lg" />
                Cerrar
              </button>
              <button
                className="bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 w-full rounded ml-4"
                onClick={sendEmailHandler}
              >
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
