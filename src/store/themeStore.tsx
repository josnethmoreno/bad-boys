import { create } from 'zustand'

export interface PropsThemeStore {
  theme: string,
  change: (value: string) => void
}

export const useThemeStore = create<PropsThemeStore>((set) => ({
  theme: 'dark',
  change: (value: string) => {
    set({ theme: value})
  }
}))