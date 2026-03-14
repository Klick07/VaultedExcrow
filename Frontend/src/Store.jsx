import { create } from "zustand";

const useStore = create((set) => ({
  showmodal: false,
  setShowmodal: (val) => set({ showmodal: val }),
  openModal: () => set({ showmodal: true }),
  closeModal: () => set({ showmodal: false }),
  contracts: [],
  addContract: (contract) =>
    set((state) => ({ contracts: [...state.contracts, contract] })),
}));

export default useStore;