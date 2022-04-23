
import './App.css';

function App() {
  const linkArr = ["Services","Project","About"];
  const osArr = ["Android","Blackberry","Iphone","Windows Phone"];
  const mobArr = [ {name : "Samsung" , style : "square"} ,{name : "HTC" , style : "square"} ,{name : "Micromax" , style : "disc"} ,{name : "Apple" , style : "circle"}  ];

  return (
    <div className="App">
      <div className='nav'>
        <h4 className='logo'>LOGOBAKERY</h4>
        <div class="links">{linkArr.map((e) =>{
          return <Link link={e}/>
        })}</div>  
        <button className='btn'>Contact</button>
      </div>


      <div className='content'>
        <h2 className='text'>Mobile Operating System</h2>
        <div>{osArr.map((e) => {
          return <Link link={e}/>
        })}</div>
        <h2 className='text'>Mobile Manufacturers</h2>
        <div>{mobArr.map((e) => {
          return <li className={e.style}>{e.name}</li>
        })}</div>
        </div>
    </div>
  );
}


// component
function Link(props){
  return <li>{props.link}</li>
}



export default App;
