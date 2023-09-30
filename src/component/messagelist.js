import React, { useState, useEffect } from "react";
import "./messagelist.css";

function MessageList({ messages, userOnline }) {
  const [messageList, setMessageList] = useState([]);
  const [userCheck, setUserCheck] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (!userCheck.includes(messages.name) && messages !== undefined) {
      setUserCheck([...userCheck, messages.name]);
      userOnline(userCheck.length + 1);
    }
    setMessageList((prevMessageList) => {
      const isMessageExists = prevMessageList.some(
        (messageItem) => messageItem.time === messages.time
      );

      if (!isMessageExists) {
        return [...prevMessageList, messages];
      }

      return prevMessageList; // No change needed
    });
  }, [messages, userCheck, userOnline]);

  const handleLike = (index) => {
    const updatedMessageList = [...messageList];
    if (messageList[index].likes < userCheck.length) {
      updatedMessageList[index].likes++;
      setMessageList(updatedMessageList);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <body>
        {messageList.length > 0 && !messageList.includes(undefined) && (
          <>
            {messageList.map((message, index) => (
              <li
                className={`list-group-item border-0 carding ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div key={index}>
                  <div className="d-flex justify-content-between border-0 ">
                    <div className="d-flex">
                      <p
                        className=" rounded-circle mx-2"
                        style={{
                          color: "white",
                          backgroundColor: `${message.color}`,
                          padding: "12px",
                        }}
                      >
                        {message.symbol}
                      </p>
                      <p style={{ fontSize: "18px" }} className="mt-1 mx-1">
                        <b>{message.name}</b>
                      </p>
                      <p
                        style={{ fontSize: "12px", marginTop: "7%" }}
                        className="mx-1"
                      >
                        {message.time.slice(0, 5)}
                      </p>
                    </div>
                    {hoveredIndex === index && (
                      <div className="mt-2 me-5">
                        <button
                          className="m-0 border-0 p-0 bg-transparent bg-color-check"
                          onClick={() => handleLike(index)}
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
                        {message.likes > 0 && <span>{message.likes}</span>}
                      </div>
                    )}
                  </div>
                  <div style={{ marginTop: "-25px", marginLeft: "60px"}}>
                    <div
                      className="w-100 rounded-end-4 rounded-bottom-4"
                    >
                      <div className="card-body mb-3 border border-2 rounded-end-4 rounded-bottom-4" id="edit" style={{ backgroundColor: "white" }}>
                        <p className="card-text m-3 text-start">{message.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </>
        )}
      </body>
    </>
  );
}

export default MessageList;
