import React, { useState } from "react";

// icons
// send
import { FiSend } from "react-icons/fi";

const MessageMe = () => {
  // message
  const [message, setMessage] = useState("");

  //   handle height
  const handleTextAreaHeight = (e) => {
    let element = document.getElementById("message-input-text-area");
    element.style.height = "24px";
    element.style.height = `${e.target.scrollHeight}px`;
  };

  // handle message submit
  const handleMessageSubmit = () => {
    if (message?.trim()) {
      let element = document.getElementById("message-input-text-area");
      element.style.height = "24px";
      console.log({ message });
      setMessage("");
    } else {
      console.log("message text required");
    }
  };

  return (
    <div className="bg-dark-dark text-light-dark py-16">
      {/* max-content */}
      <div className="max-width-container">
        {/* content */}
        <div className="relative">
          {/* text area */}
          <div className="absolute z-50 left-1/2 bottom-[-24px] -translate-x-1/2 flex items-center gap-x-3">
            <div className="border px-2 pt-1.5 py-0.5 rounded-tl-md rounded-br-md bg-dark-dark text-[.875rem]">
              <textarea
                className="w-[280px] h-[24px] max-h-[200px] focus:outline-none focus:ring-0 bg-transparent border-none resize-none p-0"
                name=""
                id="message-input-text-area"
                placeholder="your message . . . "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={(e) => {
                  handleTextAreaHeight(e);
                }}
                onKeyDown={(e) => {
                  handleTextAreaHeight(e);
                }}
              ></textarea>
            </div>
            <div className="self-end">
              <button
                onClick={handleMessageSubmit}
                className="w-[28px] aspect-square rounded-full border border-light-dark-dark-text-color flex items-center justify-center"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
