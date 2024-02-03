import { useState } from "react";

const INIT_FROM_STATE = {name: "",lastname:"", email:"", phone:""};

export const Form = () => {
    const formStorageObj = JSON.parse(localStorage.getItem("formState"))
    
    const [form,setForm] =useState ({
        name: "",
        lastname:"",
        email:"",
        phone:"",
    })
    
    const submitHandler = (e) =>{
        e.preventDedault ();
    };
     
    const clearFormHandler = (e) => {
        e.preventDedault ();
        setForm(INIT_FROM_STATE);
        localStorage.setItem("formState", JSON.stringify(INIT_FROM_STATE))
    };

    const inputHandler = (e) => {
            setForm((prev) => {
               const temp ={
                ...prev,
                    [e.target.name]: e.target.value,
               };
               localStorage.setItem("formState", JSON.stringify(temp))
                return temp;
            });
    };

    return (
        <div className="form-wrapper">
            <h1> My Form</h1>
            <div className="form-block">
                <div className="fill">
                    <form action="" onClick={submitHandler}>
                        <input value={form.name} 
                        onInput={inputHandler}
                         type="text" 
                         placeholder="Name" 
                         name="name">

                        </input>
                        <input value={form.lastname} 
                        onInput={inputHandler} 
                        type="text"
                        placeholder="Lastname" 
                        name="lastname">

                        </input>
                        <input value={form.email} 
                        onInput={inputHandler} 
                        type="text"
                        placeholder="Email" 
                        name="email">

                        </input>
                        <input value={form.phone} 
                        onInput={inputHandler} 
                        type="text"
                        placeholder="Phone" 
                        name="phone">
                        </input>
                        <div style={{display:"flex", gap:"20px"}}>
                        <button onclick={clearFormHandler} >CLEAR</button> 
                        </div>
                        <button type="submit">SUBMIT </button>
                    </form>
                </div>
                <div className="show">
                    <div className="Line">
                        {Oblect.keys(form).map((formLine) => {
                            return <div key={formLine} className="line">{form[formLine]}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}