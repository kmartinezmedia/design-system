const spacingMultiplier = 4;
const multiplySpacer = (i: number) => i * spacingMultiplier;
export const spacing = {
  0: multiplySpacer(0),
  1: multiplySpacer(1),
  2: multiplySpacer(2),
  3: multiplySpacer(3),
  4: multiplySpacer(4),
  5: multiplySpacer(5),
  6: multiplySpacer(6),
  7: multiplySpacer(7),
  8: multiplySpacer(8),
  9: multiplySpacer(9),
  10: multiplySpacer(10),
};

// special keyword
export const offsetGutter = -6; // -24 pt
export const gutter = 6; // 24 pt
