export const totalSum = (data: number[]): number => {
  return data.reduce((item, sum) => item + sum, 0);
}
