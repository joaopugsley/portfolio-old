import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";

import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosExit } from "react-icons/io";

export type ChatProps = {
  close: () => void
}

export type ChatState = {
  messageHistory: string[]
  processing: boolean
}

const Chat = ({ close }: ChatProps): JSX.Element => {
  const [chatState, setChatState] = useState<ChatState>({
    messageHistory: [],
    processing: false
  });
  const [tutorialDone, setTutorialDone] = useState<boolean>(false);

  const sendMessage = (content: string) => {
    const state = {...chatState};
    state.messageHistory.push(content);
    setChatState(state);
  }

  return (
    <section className="fixed z-[2000] top-[-10px] left-0 w-full h-[calc(100%+10px)] bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-default rounded-lg w-4/5 h-3/5 md:w-1/3 drop-shadow-xl flex justify-center items-center">
        <div onClick={() => {close()}} className="absolute right-6 top-4 hover:scale-110">
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
            <div className="absolute bottom-5 w-4/5 h-5/6 mt-3 flex flex-col justify-center items-center">
              <div className="w-full h-5/6 bg-green-600">

              </div>
              <div className="w-full h-1/6 flex flex-row justify-center items-center">
                <input type="text" disabled={chatState.processing} value={channelInput} onChange={event => handleInputChange(event.target.value)} id="channel" className="bg-gray-100 mt-2 p-2 rounded-md border text-default border-gray-300 focus:outline-purple w-full" placeholder="URL" />
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Chat;