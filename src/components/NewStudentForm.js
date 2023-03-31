
import React, {useState} from "react";

export const NewStudentForm=(props)=>{
    const [firstName, setfirstName]=useState('');
    const [lastName, setlastName]=useState('');
    const [gradeLevel, setgradeLevel]=useState('');
    
    const onSubmit=(e)=>{
        e.preventDefault();
        if(firstName && lastName && gradeLevel){
            props.addNewStudent({firstName, lastName, gradeLevel});
            setfirstName('');
            setlastName('');
            setgradeLevel('');
        }   else {
            console.log('invalid input');
        }
    };

    return(
        <div className="new-form">
            <h6>Add a New Student</h6>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="first name"
                    onChange={(e)=>setfirstName(e.target.value)}
                    value={firstName}
                />
                <input
                    type='text'
                    placeholder="last name"
                    onChange={(e)=>setlastName(e.target.value)}
                    value={lastName}
                />
               <input
                    type='text'
                    placeholder="grade level 3 or 4 or 5"
                    onChange={(e)=>setlastName(e.target.value)}
                    value={gradeLevel}
                />
                <button type='submit'>Add Student</button>
            </form>
        </div>
    )
};
