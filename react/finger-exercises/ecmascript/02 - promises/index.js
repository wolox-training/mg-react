// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(period) {
  const now = Date.now();
  return new Promise((resolve) => {
    setInterval(() => {
      const time = Date.now();
      if (time - now > period) {
        resolve(time - now);
      }
    }, 100);
  });
}

export function asyncDelay() {

}
