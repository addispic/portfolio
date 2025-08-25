import React, { useState, useRef, useEffect } from "react";
export default function ChatGemini() {
  // states
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  // refs
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  // effects
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "18px";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, [text]);
  // handlers
  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="w-full h-[19.6rem] rounded-sm bg-dark-5 flex flex-col">
      <div className="flex-1 overflow-y-auto px-3 py-1.5">
        <div>
          <p className="w-[75%] ml-3 text-sm rounded-md p-2.5 bg-dark-1 text-neutral-500">
            hello there welcome to Gemini start chat with me ...
          </p>
          <div className="w-7 mt-1.5 aspect-square flex items-center justify-center rounded-full bg-dark-1">
            i
          </div>
        </div>
        {true && (
          <div className="flex justify-end mt-3">
            {true && (
              <div className="flex justify-end">
                <p className="w-max max-w-[75%] bg-neutral-300 p-3 rounded-md text-sm text-neutral-800">
                  what is the meaning of Biology
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <footer className="px-3 py-1.5">
        <div>sending</div>
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
              <div>Icon</div>
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
          >
            x
          </button>
        </div>
      </footer>
    </div>
  );
}
