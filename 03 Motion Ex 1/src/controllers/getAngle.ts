export const getAngle = (x1: number, y1: number, x2: number, y2: number) => {
  // Calculate the change in x and y
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  // Calculate the angle using arctangent (in radians)
  const angleRad = Math.atan2(deltaY, deltaX);

  // Convert the angle to degrees and ensure it's within the range [0, 360)
  let angleDeg = (angleRad * 180) / Math.PI;
  angleDeg = (angleDeg + 360) % 360;

  return angleDeg;
};
