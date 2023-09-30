import React, { useState} from "react";
import EmojiPicker from 'emoji-picker-react';
import "./messageInput.css";

function MessageInput({onSendMessage}) {
  const [message, setMessage] = useState();
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const userColor_list = ["#FFA500", "#808080", "#FFC0CB", "#800080", "#008080"];
  const [show,setShow] = useState(true)
  
 function showing (){
  setShow(false)
 }
  const emojiPickerFunction = (emojiObject) => {
      setShow(true)
      const emoji = emojiObject.emoji;
      if(message !== undefined){
        setMessage(message+emoji)
      }else{
        setMessage(emoji)
      }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (message.trim().length !== 0) {
        const user = user_list[Math.floor(Math.random() * user_list.length)];
        let settingColor = -1;
        const settingColorIndex = user_list.findIndex((e) => e === user);

        if (settingColorIndex !== -1) {
          settingColor = settingColorIndex;
        }

        const timing = new Date().toJSON().slice(11, 19);
          onSendMessage({
            color : userColor_list[settingColor],
            symbol: user.substring(0, 2).toUpperCase(),
            name: user,
            message: message.trim(),
            time: timing,
            likes: 0,
          });
        setMessage(""); // Clear the input field
      }
    }
  };

  return (
    <>
      <div class="container-fluid position-absolute bottom-0 start-0 mb-4 bg-color-check">
        <input
          class="bg-color-check  rounded-4 text-start p-3 fs-5 " id="bind"
          style={{ width: "97%", height: "50px", }}
          placeholder="Type Message"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={message}
        />
       {show ? <> <button class="m-0 border-0 p-0 bg-transparent bg-color-check " onClick={showing}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="40"
            fill="currentColor"
            class="bi bi-emoji-sunglasses"
            viewBox="0 0 16 16"
          >
            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
            <path  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
          </svg>
        </button></> : <> <div className="emoji-picker" style={{width:"95%", position:"absolute",top:"-410px",display:"flex", justifyContent:"flex-end"}} oncl>
            <EmojiPicker onEmojiClick={emojiPickerFunction} theme="dark"/>
        </div> </>}
      </div>
    </>
  );
}

export default MessageInput;
