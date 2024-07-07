import type User from "@/types/user/user.interface";
type messageAttachmentTypes = "product" | "file";

interface MessageAttachment {
  type: messageAttachmentTypes;
  src: string;
}

interface IMessage {
  id: string;
  text: string;
  user: User;
  receiver: User;
  send_at: string;
  attachments?: MessageAttachment[];
}

export default IMessage;
