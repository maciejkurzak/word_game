import create from "zustand"
import { devtools, persist } from "zustand/middleware"

interface BearState {
  bears: number;
  increasePopulation: () => void;
}

interface UserState {
  nickname: string;
  setNickname: (nickname: string) => void;
}

const useStore = create<UserState>()(devtools(persist((set) => ({
  nickname: '',
  setNickname: (nickname: string) => set((state) => ({ nickname })),
}))));

export default useStore;