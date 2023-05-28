/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './style.css';
import { useState } from 'react';

export const Modal = () => {
  const [modal, setModal] = useState(true);

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <section className="backgroundModal">
          <div className="modalDiv">
            <h1>Employee created !</h1>
            <span className="close" onClick={(e) => closeModal(e)}>
              X
            </span>
          </div>
        </section>
      )}
    </>
  );
};
