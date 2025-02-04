import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const HISTORY_STORAGE_KEY = "pokemon_history";
const MAX_HISTORY_LENGTH = 10;

const loadHistory = (): string[] => {
  const storedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
  return storedHistory ? JSON.parse(storedHistory) : [];
};

const saveHistory = (entries: string[]) => {
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(entries));
};

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: loadHistory(),
  },
  reducers: {
    addHistoryEntry: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      // Remove the name if it already exists in the history
      state.history = state.history.filter((entry) => entry !== name);

      // Add the name to the beginning of the history array
      state.history = [name, ...state.history].slice(0, MAX_HISTORY_LENGTH);

      saveHistory(state.history);
    },
    clearHistory: (state) => {
      state.history = [];
      saveHistory(state.history);
    },
  },
});

export const { addHistoryEntry } = historySlice.actions;
export default historySlice.reducer;
