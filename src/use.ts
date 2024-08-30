import { create } from 'zustand'

export const userStore = create(( set) => ({
  name: 'nihao',
  info: {
    age: 12,
  },
  setName: name => set({ name }),
  setInfo: info => set({ info }),
}))
