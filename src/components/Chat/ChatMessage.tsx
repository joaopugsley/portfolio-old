export type ChatMessageProps = {
  content: string
  isUserMessage: boolean
}

const ChatMessage = ({ content, isUserMessage }: ChatMessageProps): JSX.Element => {
  return (
    <div className={`w-full h-fit flex ${isUserMessage ? "flex-row-reverse pl-4 origin-bottom-right": "flex-row pr-4 origin-bottom-left"} chat-message`}>
      <div className={`relative min-w-[60px] min-h-5 p-2 pt-6 bg-gradient-to-br from-violet-500 to-blue-700 rounded-xl ${isUserMessage ? "rounded-br-none" : "rounded-bl-none"}`}>
        <p className="text-xs font-extrabold absolute top-2">{isUserMessage ? "Você" : "Joe 🦝"}</p>
        <p className="text-xs font-thin text-white">{content}</p>
      </div>
    </div>
  )
}

export default ChatMessage;