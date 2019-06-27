// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(period) {
  const startTime = Date.now();
  const MAX_TIME = 4900;
  return new Promise((resolve, reject) => {
    if (period < MAX_TIME) {
      setInterval(() => {
        const endTime = Date.now();
        if (endTime - startTime > period) {
          resolve(endTime - startTime);
        }
      }, period);
    } else {
      const patient = Error('This time is too much !');
      reject(patient);
    }
  });
}

export async function asyncDelay(period) {
  return delay(period);
}
