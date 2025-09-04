import { create } from 'zustand'

interface CredibilityState {
  score: number
  setScore: (score: number) => void
}

export const useCredibilityStore = create<CredibilityState>((set) => ({
  score: 40,
  setScore: (score) => set({ score }),
}))