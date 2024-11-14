'use strict';

var React = require('react');

function DisplayMessages({
  messages
}) {
  const messagesEndRef = React.useRef(null); // Create a ref to the messages container

  // Scroll to the bottom every time the messages array changes
  React.useEffect(() => {
    // Scroll to the bottom of the container
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages]); // This will trigger every time the messages change

  return /*#__PURE__*/React.createElement("div", {
    className: "h-screen p-2 flex flex-col gap-3 w-[100%] overflow-auto"
  }, messages.map((msg, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: `flex ${msg.isSent ? "justify-end" : "justify-start"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `max-w-xs p-3 rounded-lg ${msg.isSent ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`
  }, /*#__PURE__*/React.createElement("p", null, msg.message), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 mt-1 block text-right"
  }, msg.timestamp)))), /*#__PURE__*/React.createElement("div", {
    ref: messagesEndRef
  }));
}

exports.DisplayMessages = DisplayMessages;
