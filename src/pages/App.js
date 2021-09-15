import React, {useState, useEffect} from 'react'
import BookList from '../components/BookList'
import CartList from '../components/Cart'



//local state


function App() {
  const [books, setBooks] = useState([])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      setBooks(books)
    },[])
  })
  return (

        <div>
          <h1>Books</h1>
          <BookList books = {books}/>
          <CartList/>
        </div>
    
  );
}

export default App;
