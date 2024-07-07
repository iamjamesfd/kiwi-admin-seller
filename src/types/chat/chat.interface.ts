import type User from "../user/user.interface";
interface ChatThread {
  id: string; // UUID
  members?: [User, User];
  created_at: Date;
}

export default ChatThread;
