import React, { useState, useEffect, useRef } from "react";

function CustomTextArea() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const lineHeight = parseInt(
        window.getComputedStyle(textarea).lineHeight,
        10
      );
      const maxHeight = lineHeight * 5;
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  }, [text]);
  return (
    <textarea
      placeholder="Type a message"
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      rows={1}
      style={{ overflowY: "auto" }}
      className="text-area w-[100%] input bg-gray-100 border-none focus:outline-none focus:ring-0 focus:border-none"
    />
  );
}

export default CustomTextArea;
