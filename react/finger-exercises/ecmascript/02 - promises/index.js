// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(period) {
  const startTime = Date.now();
  const MAX_TIME = 4900;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const endTime = Date.now();
      if (endTime - startTime > period) {
        resolve(endTime - startTime);
      } else if (endTime - startTime > MAX_TIME) {
        const patient = Error('This time is too much !');
        reject(patient);
      }
    }, 100);
  });
}

export function asyncDelay(period) {
  const startTime = Date.now();
  const MAX_TIME = 4900;
  const timePromise = new Promise((resolve, reject) => {
    setInterval(() => {
      const endTime = Date.now();
      if (endTime - startTime > period) {
        resolve(endTime - startTime);
      } else if (endTime - startTime > MAX_TIME) {
        const patient = Error('This time is too much !');
        reject(patient);
      }
    }, 100);
  });
  return timePromise;
}
