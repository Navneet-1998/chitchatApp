import React, { useState, useEffect } from "react";
import MessageInput from "./messageInput";
import MessageList from "./messagelist";

import "./chatbox.css";

function ChatBox() {
  const [online, setOnline] = useState(0);
  const timing = new Date().toJSON().slice(11, 16);
  const [messages, setMessages] = useState();
  const [showLike, setShowLike] = useState(false);
  const [likes, setlikes] = useState(0);

  function canShow() {
    setShowLike(true);
  }

  function cannotShow() {
    setShowLike(false);
  }

  function liked() {
    if (likes < (online)) {
      setlikes(likes + 1);
    }

  }

  function newUser(value) {
    setOnline(value);
  }

  useEffect(() => {
    handleSendMessage();
  }, []);

  const handleSendMessage = (message) => {
    if (message !== undefined) {
      setMessages(message);
    }
  };

  return (
    <body class="w-100 mh-100">
      <nav class="navbar ">
        <div class="container-fluid mx-5 ">
          <div>
            <p class="fs-5 text-start m-0">
              <b>Instroductions</b>
            </p>
            <p class="opacities">This Channel Is For Company Wide Chatter</p>
          </div>
          <div class="opacities">
            <div>
              <span>{online} / 100</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                fill="currentColor"
                class="bi bi-people"
                viewBox="0 0 16 16"
                style={{ position: "relative", top: "-7px" }}
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <span class="d-flex justify-content-center m-0 p-0">
        <p class="line"></p>
      </span>
      <div class="bg-body-tertiary contanier-fluid">
        <ul
          class="list-group border-0 carding overflow-scroll "
          style={{ height: "530px" }}
        >
          <li
            class="list-group-item border-0 carding"
            onMouseEnter={canShow}
            onMouseLeave={cannotShow}
          >
            <div class="d-flex justify-content-between border-0">
              <div class="d-flex ">
                <p
                  class="rounded-circle bg-primary mx-2 "
                  style={{ color: "white", padding: "12px" }}
                >
                  CC
                </p>
                <p style={{ fontSize: "18px" }} class="mt-1 mx-1">
                  <b>ChitChat Bot</b>
                </p>
                <p style={{ fontSize: "12px", marginTop: "5.5%" }} class="mx-1">
                  {timing}
                </p>
              </div>
              {showLike ? (
                <>
                  {" "}
                  <div className="mt-2 me-5">
                    <button
                      className="m-0 border-0 p-0 bg-transparent bg-color-check"
                      onClick={liked}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-hand-thumbs-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                      </svg>
                    </button>
                    {likes > 0 && <span>{likes}</span>}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div style={{ marginTop: "-25px", marginLeft: "60px" }}>
              <div
                class=" mb-3 border border-2 rounded-end-4 rounded-bottom-4 "
                style={{ backgroundColor: "white", width: "59%" }}
              >
                <div class="card-body m-3  text-start" id="edit">
                  <p class="card-text">
                    Welcome to Team Chat.👋👋 Send a message now to start interacting with the other user in the app. ⬇️
                  </p>
                </div>
              </div>
            </div>
          </li>
          {messages !== undefined ? (
            <>
              {" "}
              <MessageList
                messages={messages}
                userOnline={(value) => newUser(value)}
              />{" "}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <MessageInput onSendMessage={(e) => handleSendMessage(e)} />
    </body>
  );
}

export default ChatBox;
