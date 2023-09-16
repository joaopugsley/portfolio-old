"use client"

import { FormEventHandler, useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import { IoIosExit } from "react-icons/io";
import Image from "next/image";
import Button from "../Button/Button";
import ChatMessage from "./ChatMessage";

export type ChatProps = {
  close: () => void
}

type Message = {
  role: string
  content: string
}

const Chat = ({ close }: ChatProps): JSX.Element => {

  const [tutorialDone, setTutorialDone] = useState<boolean>(false);
  const [thinking, setThinking] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const messageBoxEnd = useRef<HTMLInputElement>(null);
  const [messageHistory, setMessageHistory] = useState<Message[]>([
    {
      role: "assistant",
      content: "Opa! 👋 Eu sou o Joe, o guaxinim 🦝 assistente do João. Como posso te ajudar hoje?"
    }
  ]);

  const pushMessage = (content: string, role: string) => {
    setMessageHistory((state) => [...state, {
      role: role,
      content: content
    }]);
  };

  const sendMessage = () => {
    const message = inputText;

    if(!message || message.replace(/^\s+|\s+$/g, "").length < 1) return false;
    setInputText("");

    pushMessage(message, "user");
    setThinking(true);

    fetch("/api/joe", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        messages: [ 
          ...messageHistory.map((message) => ({
            content: message.content,
            role: message.role
          })),
          {
            content: message,
            role: "user"
          }
        ]
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error) {
        pushMessage("Não sei se posso responder isso 😅🦝", "assistant");
        setThinking(false);
        return;
      }
      pushMessage(data.message, "assistant");
      setThinking(false);
    })
    .catch(err => {
      console.error(err);
      pushMessage("Não sei se posso responder isso 😅🦝", "assistant");
      setThinking(false);
    });
  }

  useEffect(() => {
    if(messageBoxEnd && messageBoxEnd.current) {
      messageBoxEnd.current.scrollIntoView();
    }
  }, [messageHistory])

  return (
    <section className="fixed z-[2000] top-[-10px] left-0 w-full h-[calc(100%+10px)] bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-default rounded-lg w-4/5 min-h-[60%] md:w-1/3 drop-shadow-xl flex justify-center items-center">
        <div onClick={() => {close()}} className="absolute right-6 top-4 hover:scale-110 z-[2500]">
          <IoIosExit className="w-8 h-8"/>
        </div>
        {
          !tutorialDone ? (
            <div className="w-full h-full p-6 flex flex-col justify-center items-center space-y-2">
              <h2 className="text-xl lg:text-3xl font-extrabold">Fale com Joe! 🦝</h2>
              <hr className="w-24 lg:w-36"/>
              <h3 className="text-base lg:text-xl text-center">Esse é <a className="bg-clip-text bg-gradient-to-r from-violet-500 to-blue-700 text-transparent">Joe</a>, meu guaxinim de estimação! <a className="line-through opacity-50">(ou quase isso)</a></h3>
              <Image alt="Joe, the raccoon 🦝" width={200} height={200} src="/images/assets/joe.jpg" className="rounded-xl object-cover h-36 md:h-48 w-auto"/>
              <span className="text-sm lg:text-base text-center">Ele foi treinado para te convencer a me contratar!</span>
              <Button onClick={() => {setTutorialDone(true)}}>
                <span className="flex flex-row text-center justify-center items-center">🦝 Falar com Joe! <AiOutlineArrowRight className="ml-2"/></span>
              </Button>
              <span className="text-xs lg:text-sm text-center italic bg-clip-text bg-gradient-to-r from-violet-500 to-blue-700 text-transparent">PS: ele tem o mal hábito de mentir de vez em quando.</span>
            </div>
          ) : (
            <div className="absolute bottom-5 w-4/5 lg:w-3/5 h-[90%] mt-3 flex flex-col justify-center items-center">
              <h2 className="text-xl xl:text-3xl font-extrabold">Fale com Joe! 🦝</h2>
              <div className="w-full mt-1 mb-2 h-5/6 max-h-[83.33%] bg-black bg-opacity-10 rounded-lg p-3">
                <div className="relative w-full h-full flex flex-col overflow-y-scroll overflow-x-hidden no-scrollbar space-y-2">
                  {
                    messageHistory.map((message, i) => (
                      <ChatMessage key={`message-${i}`} content={message.content} isUserMessage={message.role == "user"}/>
                    ))
                  }
                  <div ref={messageBoxEnd}/>
                </div>
              </div>
              <div className="relative w-full h-1/6 flex flex-row justify-center items-center">
                <textarea 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      sendMessage()
                    }
                  }}
                  onChange={(e) => setInputText(e.target.value)} 
                  value={inputText} disabled={thinking} 
                  rows={1} maxLength={200} 
                  placeholder={
                    !thinking ? "Fale com Joe! 🦝" : "Joe 🦝 está pensando..."
                  } 
                  className="no-scrollbar resize-none relative w-full pl-5 py-3 pr-10 text-white bg-transparent px-3 rounded-md border border-violet-500 focus:outline-none text-sm disabled:opacity-50"
                />
                <div onClick={sendMessage} className="absolute right-3 w-fit h-fit justify-center items-center transition-all duration-150 hover:scale-110">
                  <AiOutlineSend/>
                </div>
              </div>
              <span className="text-xs mt-1 font-thin bg-clip-text bg-gradient-to-r from-violet-500 to-blue-700 text-transparent select-none">Joe is powered by OpenAI API</span>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Chat;