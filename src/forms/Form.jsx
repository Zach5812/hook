import React, {useState} from 'react'
import FormDisplay from '../components/FormDisplay'


const Form = () =>{
    const [firstName, setfirstName] =useState("John")
    const [lastName, setlastName] =useState("Smith")
    const [email, setEmail] =useState("johnsmith@email.com")
    const [password, setPassword] =useState("password")
    const [password2, setPassword2] =useState("password")

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onChange={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first" id="" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="last" id="" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" name="confirm" id="" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                </div>
            </form>
            <FormDisplay firstName={firstName} lastName={lastName} email={email} password={password} password2={password2} />
        </div>
    )
}

export default Form