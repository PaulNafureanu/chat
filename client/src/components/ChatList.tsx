import { useState } from "react";
import "./ChatList.css";
import InputBox from "./InputBox";
const ChatList = () => {
  const [value, setvalue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value);
  };

  return (
    <div id="chat-list">
      <InputBox id="chat-search" value={value} onChange={handleChange} />
    </div>
  );
};

export default ChatList;
