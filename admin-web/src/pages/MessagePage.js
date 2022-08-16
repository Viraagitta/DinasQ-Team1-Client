import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
export default function MessagePage() {
  const { id } = useParams();
  const [value, setValue] = useState();
  const [chats, setChat] = useState([]);
  const socket = io("http://localhost:3000", {
    extraHeaders: {
      access_token: localStorage.getItem("access_token"),
    },
  });
  useEffect(() => {
    socket.on(`admin-${id}`, (test) => {
      setChat((chat) => {
        chat.push(test);
        return [...chat];
      });
    });

    return () => {
      socket.off(`admin-${id}`);
    };
  }, []);

  const sendChat = () => {
    socket.emit("chat", { receiver: id, sender: "admin", message: value });
  };

  return (
    <>
      <div className="main">
        <div className="topbar">
          <div>
            <div>Test Message</div>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="Chat Now"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="submit"
              className="btn-submit-register"
              onClick={sendChat}
            >
              CREATE
            </button>
          </div>
        </div>
        <div>
          {chats.map((chat, i) => {
            return (
              <div key={i}>
                <div>{chat.message}</div>
                <div>{chat.sender}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
