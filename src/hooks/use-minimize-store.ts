import { create } from "zustand";

type StoreData = {
  isMinimized: boolean;
  onMinimizeChange: () => void;
};

export const useMinimizeStore = create<StoreData>((set) => ({
  isMinimized: false,
  onMinimizeChange: () =>
    set(({ isMinimized }) => ({
      isMinimized: !isMinimized,
    })),
}));
