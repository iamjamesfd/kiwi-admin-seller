import type User from "@/types/user/user.interface";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = ref<User[]>([
    {
      id: "1",
      joined_at: new Date(),
      name: { firstName: "John", lastName: "Doe" },
      profile: {
        followers: [],
        following: [],
        img: "https://via.placeholder.com/48",
      },
    },
    {
      id: "2",
      joined_at: new Date(),
      name: { firstName: "Alisher", lastName: "Uzoqov" },
      profile: {
        followers: [],
        following: [],
        img: "https://via.placeholder.com/48",
      },
    },
  ]);

  const getUsers = computed(() => users);

  const getUserById = (userId: string): User | null => {
    const user = users.value.find((item) => {
      return item.id === userId;
    });
    if (user) return user;
    return null;
  };
  return { getUsers, getUserById };
});

