import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var name="Litton Das";
  // var person={
  //     name:"dg",
  //     age:45
  //   };
  // var person2={
  //     name:"dog",
  //     age:45
  //   };
  // var style=
  // {
  //   color:'yellow',
  //   backgroundColor:'red'
  // };
  const name1=['avishek','animesh','apon','arijit','sumon','rajon'];
  const products=[{name:"photoshop", price:"$99.09"},
                  {name:"photoshop1", price:"$99.09"},
                  {name:"photoshop2", price:"$99.09"}];
  const productsName=products.map(product=>product.name);
  console.log(productsName);
  // const nayokName=name1.map(name=>name);
  // console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
       <ul>{
          name1.map(name=><li>{name}</li>)
       }
       </ul>
        <p>i am a react developer</p>
        
        {/* <Products name={products[0].name} price={products[0].price}></Products>
        <Products name={products[1].name} price={products[1].price}></Products>
        <Products name={products[2].name} price={products[2].price}></Products> */}
        {/* or */}
        {/* <Products products={products[0]}></Products>
        <Products products={products[1]}></Products>
        <Products products={products[2]}></Products> */}
        {/* or */}
        {
        products.map(products=><Products products={products.name}></Products>)        
        }   
        <Person name={name1[0]} work="factory"></Person>
        <Person name={name1[1]} work="garments"></Person>
        <Person name={name1[2]} work="BSRM"></Person>
        <Person name={name1[3]} work="EBL"></Person>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          create222 Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> i am a react:{name}</p>
        <p>total: {(2+3)*5}</p>
        <p className="" style={style}>address: {person.name +" "+person.age}</p>
        <br/>
        <p style={{backgroundColor:'black',color:'red'}}>address: {person2.name +" "+person2.age}</p>
        <p>i</p>
        <h1>HI </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
    </div>
  );
}

function Counter()
{
  const[count,setCount]=useState(10);
  const countHandler=()=>
  {
    //  const newCount=count +1;
    //  setCount(newCount);
    //or
     setCount(count +1);
  };
  return(
    <div>
      <h2>count :{count}</h2>
      {/* <button onClick={countHandler}>Increase</button> */}
      {/* or */}
      <button onMouseMove={()=>setCount(count+1)}>Increse</button>
      <button onClick={()=>setCount(count-1)}>Decrese</button>
    </div>
  )
}

function Users()
{
  const [users,setUsers]=useState([])
  useEffect(()=>{
     //console.log("passing");
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res=>res.json())
    //  .then(data=>console.log(data))
    //or
    .then(data=>setUsers(data))
   } ,[])

  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }

      </ul>
      
    </div>
  )
}

function Person(props)
{
  // var style={
  //   border:"10px solid red" ,
  //   margin: "5px"
  // }
  // return (<div style={style}>
  //or
  return (<div style={{border:"10px solid red" , margin: "5px", width:'500px'}}>
  <h1>Name :{props.name}</h1>
  <h3>profession:{props.work}</h3>
  </div>)

}

function Products(props)
{
  const productStyle={
    border:'1px solid gray',
    backgroundColor:'5px',
    backgroundRadius:'5px',
    height:'200px',
    width:'200px',
    float:'float'
  }
  //console.log(props);
  const {name,price}=props.products;//d structure
  return(
    <div style={productStyle}>
      {/* <h3>{props.products.name}</h3>
      <h5>{props.products.price}</h5> */}
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
