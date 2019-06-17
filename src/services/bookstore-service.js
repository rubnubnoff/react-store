
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J. K. Rowling',
      price: 50,
      coverImage: 'http://www.offthelibraryshelf.com/wp-content/uploads/2013/07/Harry-Potter-and-the-Half-Blood-Prince-new.jpg'
    },
    {
      id: 2,
      title: 'J. Tolkien',
      author: 'Michael T. Nygard',
      price: 65,
      coverImage: 'https://rocketr.net/uploads/57ae33a574717e.jpg'
    },
    {
      id: 3,
      title: 'George Martin',
      author: 'Game of Thrones',
      price: 45,
      coverImage: 'https://cdn1.ozone.ru/multimedia/1011383342.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(this.data);
      }, 700);
    });
  }
}