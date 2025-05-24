const isTokenExpired = (expiry: number): boolean => {
  const currentTime = Math.floor(Date.now() / 1000);
  return expiry < currentTime;
};

export default isTokenExpired;
