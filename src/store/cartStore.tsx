import { create } from "zustand";

interface PropsToggleCart {
  show: boolean,
  toggle: () => void,
  close: () => void
}

export const useToggleCart = create<PropsToggleCart>((set) => ({
  show: false,
  toggle: () => set((state) => ({ show: !state.show })),
  close: () => set((state) => ({ show: false}))
}))

