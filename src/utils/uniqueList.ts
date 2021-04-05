import { Player } from "../types/Player";

export const uniqueList = (
  values: Player[],
  key: keyof Player
): (string | number)[] => {
  const list: Set<string | number> = new Set();
  for (const player of values) {
    list.add(player[key]);
  }
  return Array.from(list);
};
