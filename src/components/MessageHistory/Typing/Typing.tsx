import { MessageType } from "../MessageHistory";

export const Typing = ({ from, message} : MessageType) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> 
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        печатает...
      </div>
    </li>
  )
}
