export const getEllipsisTxtName = (str: string, n: number) => {
  if (str && str.length > n) {
    return `${str.slice(0, n)}...`;
  } else {
    return str;
  }
  return "";
};
