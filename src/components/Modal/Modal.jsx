/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
// styles
import './style.css';
import { useState } from 'react';

/**
 * Modal component for displaying a modal with a message.
 * @returns {JSX.Element} The rendered modal component.
 */
export const Modal = () => {
  const [modal, setModal] = useState(true);

  /**
   * Function for closing the modal.
   * @returns {void}
   */
  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <section className="overlay">
          <div className="modalContainer">
            <h1>Employee created !</h1>
            <span className="closeButton" onClick={(e) => closeModal(e)}>
              X
            </span>
          </div>
        </section>
      )}
    </>
  );
};
