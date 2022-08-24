import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";


import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [username, setUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = e => {
        e.preventDefault()
        
        if (username.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if (+enteredAge < 1){
            return;
        }
        props.onAddUser(username, enteredAge);
        setUsername('')
        setEnteredAge('')
    }

    const userNameChangeHandler = e => {
        setUsername(e.target.value)
    }
    const userAgeChangeHandler = e => {
        setEnteredAge(e.target.value)
    }

return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input 
                id='username' 
                type='text' 
                value={username} 
                onChange={userNameChangeHandler}
            />
            <label htmlFor='age' >Age (Years)</label>
            <input 
                id='age' 
                type='number' 
                onChange={userAgeChangeHandler} 
                value={enteredAge}
            />
            <Button type='submit'>Add Button </Button>
        </form>

    </Card>
    )
    

    
}

export default AddUser