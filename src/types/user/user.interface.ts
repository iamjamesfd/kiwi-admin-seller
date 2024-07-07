type Name = { firstName: string; lastName: string };
type Profile = { img: string; followers: User[] | []; following: User[] | [] };

interface User {
  id: string; // UUID
  name: Name;
  profile: Profile;
  joined_at: Date;
}

export default User;
