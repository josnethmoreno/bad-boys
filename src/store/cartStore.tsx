import { ImageElement } from "@/services/products.service";
import { create } from "zustand";

export interface PropsCartProduct {
  name: string,
  image: string,
  color?: string,
  size?: string,
  price: number
}

export const useStoreCart = create(() => ({
  image: '',
  name: '',
  color: '',
  size: '',
  price: 0,
}))

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

