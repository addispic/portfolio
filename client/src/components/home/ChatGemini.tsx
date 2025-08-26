import React, { useState, useRef, useEffect } from "react";
// icons
import { LuRotateCw } from "react-icons/lu";
import { GrSend } from "react-icons/gr";
import { AiOutlinePaperClip } from "react-icons/ai";
import { RiGeminiFill } from "react-icons/ri";
// component
import Bubble from "./Bubble";
export default function ChatGemini() {
  // states
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [myMessage, setMyMessage] = useState<{
    text: String;
    file: File | null;
  }>({ text: "", file: null });
  const [hasMounted, setHasMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  // refs
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  // effects
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "18px";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, [text]);

  useEffect(() => {
    if (hasMounted && bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // or 'end' if you want it at the very bottom
      });
    } else {
      setHasMounted(true);
    }
  }, [myMessage.file, myMessage.text]);

  useEffect(() => {
    let timeout: any;

    if (isSending) {
      timeout = setTimeout(() => {
        setIsSending(false);
        setIsError(true);
      }, 15000);
    }

    return () => clearTimeout(timeout); // cleanup on unmount or if isSending changes
  }, [isSending]);

  // handlers
  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };
  const submitHanler = () => {
    if (file || text.trim()) {
      setMyMessage((prev) => {
        return {
          ...prev,
          text: text ? text : prev.text,
          file: file ? file : prev.file,
        };
      });
    }
    setIsError(false);
    setIsSending(true);
    setFile(null);
    setText("");
  };
  return (
    <div className="w-full h-[19.6rem] rounded-sm bg-dark-5 flex flex-col">
      <div className="flex-1 overflow-y-auto px-3 py-1.5">
        <div>
          <p className="w-[75%] ml-3 text-sm rounded-md p-2.5 bg-dark-1 text-neutral-500">
            Hey! I’m your virtual <span className="font-black">AI</span>{" "}
            assistant ! ! !
          </p>
          <div className="w-7 mt-1.5 aspect-square flex items-center justify-center rounded-full bg-dark-1">
            <RiGeminiFill />
          </div>
        </div>
        {myMessage.file && (
          <div className="flex justify-end mt-3">
            {true && (
              <div className="flex justify-end">
                <div className="w-[75%] h-[150px] overflow-hidden rounded-md text-sm">
                  <img
                    src={URL.createObjectURL(myMessage.file)}
                    className="w-full h-full object-center object-cover"
                    alt="my chat message files"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {myMessage.text.trim() && (
          <div className="flex justify-end mt-1.5">
            {true && (
              <div className="flex justify-end">
                <p className="w-max max-w-[220px] bg-neutral-300 p-3 rounded-md text-sm text-neutral-800">
                  {myMessage.text}
                </p>
              </div>
            )}
          </div>
        )}
        {isError && (
          <div className="flex justify-end mt-1.5">
            {true && (
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setIsError(false);
                    setIsSending(true);
                  }}
                  className="flex items-center gap-1.5 text-sm text-red-600 cursor-pointer"
                >
                  <span>Tray agin</span>
                  <LuRotateCw />
                </button>
              </div>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <footer className="px-3 py-1.5">
        {isSending && <Bubble text="Generating" />}
        <div
          className={`flex items-end gap-1.5 px-1.5 py-1.5 border  rounded-md transition-colors ease-in-out duration-300 ${
            focus || text || file ? "border-pr" : "border-neutral-900"
          }`}
        >
          <input
            type="file"
            accept="image/*"
            id="image-file-picker"
            hidden
            onChange={fileInputHandler}
          />
          <label
            htmlFor="image-file-picker"
            className="cursor-pointer shrink-0"
          >
            {file ? (
              <div className="w-6 aspect-square rounded-md border border-pr overflow-hidden">
                <img
                  src={URL.createObjectURL(file)}
                  alt="picked image file"
                  className="h-full w-full object-center object-cover"
                />
              </div>
            ) : (
              <div>
                <AiOutlinePaperClip className="text-xl" />
              </div>
            )}
          </label>
          <textarea
            ref={textRef}
            spellCheck={false}
            placeholder="Chat with Gemini . . . "
            className="text-sm focus:ring-0 focus:outline-none w-full border-none bg-transparent resize-none h-[18px] max-h-[120px]"
            value={text}
            onChange={(e) => {
              setFocus(true);
              setText(e.target.value);
            }}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              if (!file || !text) {
                setFocus(false);
              }
            }}
          ></textarea>
          <button
            className={`transition-colors ease-in-out duration-300 w-6 aspect-square rounded-full  flex items-center justify-center  shrink-0 ${
              file || text
                ? "bg-pr text-neutral-400 cursor-pointer"
                : "bg-neutral-900 text-neutral-700"
            }`}
            onClick={submitHanler}
          >
            <GrSend />
          </button>
        </div>
      </footer>
    </div>
  );
}
