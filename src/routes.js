const {
  addBookHandler,
  getAllBooksHandler,
  getByIdBooksHandler,
  editBooksHandler,
  deleteBooksHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getByIdBooksHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler
  }
]

module.exports = routes
