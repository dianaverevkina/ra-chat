import { Message } from "./Message/Message";
import { Response } from "./Response/Response";
import { Typing } from './Typing/Typing';

interface MessageSender {
  name: string,
}

interface MessageProp {
  id: string,
  from: MessageSender,
  type: string,
  time: string,
  text?: string,
}

export interface MessageType {
  from: MessageSender;
  message: MessageProp;
};

interface MessagesProps {
  list: MessageProp[],
}

function defineTypeMessage(mes : MessageProp) {
  if (mes.type === 'message') {
    return <Message key={mes.id} from={mes.from} message={mes} />;
  }
  if (mes.type === 'response') {
    return <Response key={mes.id} from={mes.from} message={mes} />;
  }

  return <Typing key={mes.id} from={mes.from} message={mes} />;
}

export const MessageHistory = ({ list = [] } : MessagesProps) => {
  return (
    <ul>
      {list.map(mes => defineTypeMessage(mes))}
    </ul>
  )
}
