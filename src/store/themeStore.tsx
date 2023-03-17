import { create } from 'zustand'

export interface PropsThemeStore {
  theme: string,
  change: (value: string) => void
}

export const useThemeStore = create<PropsThemeStore>((set) => ({
  theme: 'light',
  change: (value: string) => {
    set({ theme: value})
  }
}))