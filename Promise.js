// const promise= new Promise((resolve, reject) => {
//     if(true){
//         resolve('stuff Worked');
//     }
//     else{
//         reject('Error,it broke');
//     }
// }) 

// promise.then(result => result + '!')
// .then(result2=>{
//     throw Error
//     console.log(result2);
// })
// .catch(()=>console.log('error!'));

// const urls=[
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/photos',
//     'https://jsonplaceholder.typicode.com/albums',
// ]

//  Promise.all(urls,map (url =>{
//   return fetch(url).then(resp=>resp.json())
//  })).then(results=>{
//    console.log(results[0])
//    console.log(results[1])
//    console.log(results[2])
//  })


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


