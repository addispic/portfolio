// history
export interface IHistory {
  username: string;
  agent: string;
  home: number;
  telegram: number;
  email: number;
  linkedin: number;
  createdAt: string;
  updatedAt: string;
}

// initial state
export interface IInitialState {
  histories: IHistory[];
  isGetHistoriesPending: boolean;
}
