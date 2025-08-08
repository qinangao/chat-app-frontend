import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { formatMessageTime, getMessageDateLabel } from "../lib/utils";

function ChatWindow() {
  const { messages, selectedUser } = useChatStore();
  const { authUser } = useAuthStore();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function getGroupedMessages() {
    if (!messages || messages.length === 0) return [];

    const groups = messages.reduce((acc, message) => {
      const dateKey = new Date(message.createdAt).toDateString();
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(message);
      return acc;
    }, {});

    return Object.entries(groups).map(([dateKey, msgs]) => ({
      date: dateKey,
      messages: msgs,
    }));
  }

  const groupedMessages = getGroupedMessages();
  console.log(groupedMessages);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {groupedMessages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-center text-base-content/60">
            No messages yet. Start the conversation!
          </p>
        </div>
      ) : (
        groupedMessages.map(({ date, messages: dateMessages }) => (
          <div key={date}>
            {/* Date separator */}
            <div className="flex justify-center mb-4">
              <span className="bg-base-300 text-xs px-3 py-1 rounded-full shadow">
                {getMessageDateLabel(date)}
              </span>
            </div>

            {/* Messages for this date */}
            {dateMessages.map((message) => (
              <div
                key={message._id}
                className={`chat ${
                  message.senderId === authUser._id ? "chat-end " : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="size-10 rounded-full border">
                    <img
                      src={
                        message.senderId === authUser._id
                          ? authUser.profilePic || "/avatar.png"
                          : selectedUser.profilePic || "/avatar.png"
                      }
                      alt="profile pic"
                    />
                  </div>
                </div>

                <div className="chat-header mb-1 flex-col">
                  <time className="text-xs opacity-50 ml-1">
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>

                <div
                  className={`chat-bubble  text-primary-content ${
                    message.senderId === authUser._id
                      ? "chat-end chat-bubble-primary"
                      : "chat-start  bg-base-200"
                  }`}
                >
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>
              </div>
            ))}
          </div>
        ))
      )}

      {/* Invisible element for auto-scrolling */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;
