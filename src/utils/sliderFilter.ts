import { Player } from "../types/Player";

export const sliderFilter = (
  p: Player,
  key: keyof Player,
  filter: number[] | null
) => {
  if (!filter) {
    return p;
  }
  return p[key] >= filter[0] && p[key] <= filter[1];
};
