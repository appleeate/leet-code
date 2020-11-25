/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function (A, B, C, D, E, F, G, H) {
  let pointA_x = E > A ? E : A;
  let pointA_y = F > B ? F : B;
  let pointB_x = G > C ? C : G;
  let pointB_y = H > D ? D : H;

  let width = pointB_x - pointA_x;
  let height = pointB_y - pointA_y;
  return (C - A) * (D - B) + (G - E) * (H - F) - (width < 0 || height < 0 ? 0 : width * height);
};
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
