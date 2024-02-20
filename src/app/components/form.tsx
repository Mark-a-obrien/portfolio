"use client"

import myAppData from "./myAppData";
import LoginButton from "./loginButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Form() {
  const router = useRouter();

  let [someError, setSomeError] = useState<{username:string}>({username:""});

  function checkPassword(username:FormDataEntryValue, password:FormDataEntryValue) {

    if (myAppData[0].username === username && myAppData[0].password === password) 
    {
      console.log("Correct password");
      router.push('/dashboard?username="mark"');
    } 
    else 
    {
      formValitation(username, password);
      console.log("Wrong password");
    }

    
  }

  function formValitation(username:FormDataEntryValue, password:FormDataEntryValue) 
  {
    if (String(username).length < 4)
    setSomeError({...someError, username: "Please enter a valid username"});
  else 
    setSomeError({...someError, username: ""});
  }



  function handleSubmit(e: React.SyntheticEvent): void {
     // Prevent the browser from reloading the page
     e.preventDefault();

     // Read the form data
     const form = e.target as HTMLFormElement;
     const formData = new FormData(form); 
 
     // You can pass formData as a fetch body directly:
    //  fetch('/some-api', { method: form.method, body: formData });
 
     // Or you can work with it as a plain object:
     const formJson = Object.fromEntries(formData.entries());

     checkPassword(formJson.username, formJson.password)

     console.log(formJson);
  }

  return (

    <form method="post" onSubmit={handleSubmit} className="flex flex-col space-y-4 h-40">
      <div className="flex flex-col space-y-1">
        <input className="text-black"  type="text" name="username" id="username" autoComplete="off"/>
        {someError.username && <p className="text-sm text-red-500">{someError.username} </p>}
      </div>
      <div className="flex flex-col">
        <input className="text-black"  type="password" name="password" id="password" />
      </div>

      <LoginButton /> 

      {/* <button   type="submit">Submit</button> */}
    </form>
    
  )
}

export default Form