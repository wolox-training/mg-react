import { DATA } from '@constants/data';

const getBooks = new Promise(resolve => {
  setTimeout(() => {
    resolve(DATA);
  }, 1000);
});

export default getBooks;
