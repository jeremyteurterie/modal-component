import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modalDiv{align-items:center;background-color:#f3f4f5;border-radius:5px;box-shadow:0 2px 8px 0 rgb(41 190 119/5%);display:flex;justify-content:space-between;margin:auto;padding:20px;text-align:center;width:30%}.backgroundModal{background-color:hsla(0,0%,77%,.23);display:flex;height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:1}.close{align-items:center;background-color:hsla(0,0%,77%,.03);border-radius:100%;color:#000;cursor:pointer;display:flex;height:35px;justify-content:center;right:15px;top:15px;transform:scale(.7);width:35px}";
styleInject(css_248z);

/* eslint-disable react/react-in-jsx-scope */
const Modal = () => {
  const [modal, setModal] = useState(true);
  const closeModal = () => {
    setModal(!modal);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, modal && /*#__PURE__*/React.createElement("section", {
    className: "backgroundModal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalDiv"
  }, /*#__PURE__*/React.createElement("h1", null, "Employee created !"), /*#__PURE__*/React.createElement("span", {
    className: "close",
    onClick: e => closeModal()
  }, "X"))));
};

export { Modal };
