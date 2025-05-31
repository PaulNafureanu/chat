import "./App.css";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";
import Menu from "./components/Menu";

export function App() {
  return (
    <>
      <Menu />
      <div id="chat-container">
        <ChatList />
        <ChatBox />
      </div>
    </>
  );
}
