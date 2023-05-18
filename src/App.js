
import './App.css';
import { Counter } from './Counter';
import {useState} from 'react';
import{Routes,Route, useNavigate,useParams} from 'react-router-dom';
import { Addcolor } from './Addcolor';
import { Link } from 'react-router-dom';

const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/Ma_qMbvTpzo",
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];



function App() {
  return (
    <div className="App">
      <nav>
        <ul style={{display:'flex',flexDirection:'column'}}>
          <Link to="/">Home</Link>
          <Link to="/books">BookList</Link>

          <Link to="/Addcolor">Addcolor</Link>

        </ul>
      </nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/books" element={<BookList/>}/>
<Route path="/Addcolor" element={<Addcolor/>}/>
<Route path="/books/:bookid" element={<BookDetail/>}/>

</Routes>
    </div>
  );
}

function BookDetail() {
  const{bookid}=useParams();
  return (
    <div>
<h2>Book Detail of {bookid}</h2>
    </div>
  );
}
function Home() {
  return (
    <div className="home">
      <h1 style={{color:"red",fontSize:"10"}}>Welcome to the book app</h1>
      <p style={{color:"red",fontSize:"10"}}>we have enomorous book collection look on it </p>
    </div>
  );
}
function BookList() {
  
  // const BookList=INITIAL_BOOK_LIST;
  const [bookList,setBookList]=useState(INITIAL_BOOK_LIST);
  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");
  
  return (
    <div> <div  className='add-forms'>
    <form >
   
    <label> Name:
    <input onChange={(event)=>setName(event.target.value)} type="text" placeholder='enter your book name' />
    </label>
    <label> Poster link:
    <input type="text" onChange={(event)=>setPoster(event.target.value)} placeholder='enter image link' />
    </label>
    <label>Rating:
    <input type="numbers" onChange={(event)=>setRating(event.target.value)} placeholder='enter your book ratings' />
    </label>
    <label>Summary:
    <input type="text" onChange={(event)=>setSummary(event.target.value)} placeholder='enter your book summary' />
    </label>
    </form>
    <button onClick={()=>{
      const newBook={
        name: name,
        poster: poster,
        rating: rating,
        summary:summary
      };
      setBookList([...bookList,newBook])
      }}>AddButton</button>
 
  
  </div>
   
    <div className="book-list">
       
    {bookList.map((bk,index)=>
    <Book key={index} book={bk} id={index}/>)}
    
        </div>
        </div>
  )
}
function Book({book,id}){
  const Navigate=useNavigate();
  const [show,setShow]=useState(true);
const Styles={
  color:book.rating>8?"green":"red",
};
const SummaryStyles ={
 display:show === true ? "block":"none"
};
  return(
    <div className='book-card'>
            <img src={book.poster} className="book-image" alt={book.name}/>

      <div className='book-title'>
      
      <h2  className='book-name'>{book.name}- {id}</h2>
      
      <p style={Styles} className='book-ratings'>star{book.rating}</p>
      </div>
      <div className='book-like'>
        <Counter/>
        </div>
      <button onClick={()=>Navigate("/books/"+id)}> INFO</button>
      <button onClick={()=>setShow(!show)} className="toggleSummary">Toggle</button>
    { show? <p   className='book-summary'>{book.summary}</p>:""}
     

      


    </div>
  );

}
export default App;


