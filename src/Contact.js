import React, { useState } from "react";
const Contact = () => {

    const [text,changetext]=useState({
        fullname:'',
        email:'',
        mobilenumber:'',
        message:'',
    });

    

    const InputEvent=(event)=>{
        const{name,value}=event.target;
        changetext((prev)=>{
        return{...prev,[name]:value};
        });
    
        
    
    }
    
    const formSubmit=(event)=>{
      event.preventDefault();
      alert(`my name is ${text.fullname}.my mobile number is ${text.mobilenumber} ${text.email} ${text.message}`);
    }

    return (  
    <>
      <div className="my-5">

          <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="container contact_div">
      <div className="row">
       
       <div className="col-md-6 col-10 mx-auto">
       
         <form onSubmit={formSubmit}>
       
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">FullName</label>
        <input 
        type="text" 
        class="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Enter your Name"
        name="fullname"
        value={text.fullname}
        onChange={InputEvent}    
        />
        </div>
        
          
        <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input 
        type="email" 
        class="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Enter Email Address"
        name="email"
        value={text.email} 
        onChange={InputEvent}   
        />
        
        </div>

         
        <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input type="number" 
         class="form-control" 
         id="exampleFormControlInput1" 
         placeholder="mobile number"
         name="mobilenumber"
         value={text.mobilenumber}
         onChange={InputEvent}
         />
        </div>

        


        

        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Meesage</label>
        <textarea 
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        name="message"
        value={text.message}
        onChange={InputEvent}
        >
          
        </textarea>
        </div>
          

            <div class="col-12">
           <button class="btn btn-primary" type="submit">Submit form</button>
            </div>

        



        
         </form>

       </div>
           
      </div>

      </div>
    </>

    );
}
 
export default Contact;