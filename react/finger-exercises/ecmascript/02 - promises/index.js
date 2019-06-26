// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(period) {
  const startTime = Date.now();
  return new Promise((resolve) => {
    setInterval(() => {
      const endTime = Date.now();
      if (endTime - startTime > period) {
        resolve(endTime - startTime);
      }
    }, 100);
  });
}

export function asyncDelay() {

}
