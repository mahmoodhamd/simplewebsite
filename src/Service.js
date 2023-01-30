import Card from "./Card";
import Sdata from "./Sdata";
import React, {useState,useEffect} from "react";
import axios from "axios";
const Service = () => {

  const [post,setposts]=useState([])
 
  // for unsplash api.
  const [text,setText]=useState('');
  const [client,setclientId]=useState('ytjnbTjzsdwlO4Ho7R7ZUU8f1yKRMfHCYTvQgsT28-w');
  const [result,setresult]=useState([]);
  // const[title,setTitle]=useState('')
  // const[body,setBody]=useState('')

   const [iserror,setiserror]=useState("");

// using Async Await

const getMyPostData=async()=>{
  try{
    const res=await axios.get('https://jsonplaceholder.typicode.com/users');
    setposts(res.data);
  }catch (error){
    setiserror(error.message);
  }
  
}

useEffect(()=>{
  getMyPostData();
},[]);

// const postData=(event)=>{
//   event.preventDefault();
//   axios.post('https://jsonplaceholder.typicode.com/users',{
//   title,
//   body
//   }).then(res=>{
//     setposts([res.data,...post]);
//   }).catch(err=>console.log(err));


// }

// const DeleteItem=(id)=>{
  

// axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
// .then(res=> console.log('deleted',res.data)).catch(err => console.log(err))

// }
  




  // simple data using axios library
// useEffect(()=> {
//  axios.get('https://jsonplaceholder.typicode.com/users')
//  .then(res=>{
//   setposts(res.data);
//  })
//  .catch(err=>{
//   console.log(err);
//  })
// })

/// simple fetchdata using using fetch

// useEffect(() => {
//     const url = "https://jsonplaceholder.typicode.com/users"
     
//     const fetchData = async () => {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//         setadvice(json);
// 		} catch (error) {
//         console.log("error", error);
// 		}
// };
//     fetchData();

//   }, []);





//   let cards=Sdata.map((cd)=>

//  <Card 

//    key={cd.id}
//    img={cd.imgsrc}
//    tity={cd.title}

//    />
//);
  const InputChange=(event)=>{
   setText(event.target.value);
   //console.log(event.target.value);
  }

  const SubmitChange=()=>{
    // setclientId(text);
     console.log(text);
    const url='https://api.unsplash.com/search/photos/?page=1&query='+text+'&client_id='+client;
     axios.get(url).then(res=>{
       setresult(res.data.results);
     });
      
     
    }

    return (  
    <>
      
      <div className="my-5">
      
       <h1 className="text-center">Our Services</h1>
      <h1>Unsplash photo Search</h1>
      <input onChange={InputChange} type="text"  name={text} placeholder="Search"/>
      <button onClick={SubmitChange} type="submit">Search</button>
      
      {result.map((photo)=>(
          <img src={photo.urls.small}/>
      ))}
      </div>
     
      <div className="container-fluid me-5 ">
   <div className="row">
     <div className="col-10 mx-auto">
        <div className="row gy-4">
           {/* {iserror!=="" &&<h2>{iserror}</h2>}  */}
           {/* <form>
       <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
      <hr/>
       <input type="text" value={body} onChange={(event)=>setBody(event.target.value)}/>
       <hr/>
       <button onClick={postData}>Post</button>
      </form> */}
            {
              post.map((val,ind)=>{
                
                
                return <Card
                
                 key={ind}
                 id={val.id}
                 title={val.title}
                 username={val.username}
                // onSelect={DeleteItem}
                //  url={val.url}
                //  username={val.body}
                 
                 
                />
                
              })

            }
        </div>
     </div>

   </div>

   </div>
        
    </>

    );
          }
 
export default Service;