import React from "react";
import {NewStudentForm} from './NewStudentForm';

export const Session=(props)=>{
    const {session, updateSession} =props;
console.log(session);
    
    const deleteStudent=(lastName)=>{
                const updatedSession={
            ...session,
            students: session.students.filter((student)=>student.lastName !== lastName)
        };
               
        updateSession(updatedSession);
    }

    const addNewStudent=(student)=>updateSession({...session, students: [...session.students, student]});
    console.log(session);

    const students=()=>(
       
        <ol>
            {session.students.map((student, index)=>(
                <li key={index}>
                    <label>{`${student.firstName} ${student.lastName} --- Grade: ${student.gradeLevel} --- `}</label>
                
                    <button className='del-btn' onClick={(e)=>deleteStudent(student.lastName)}>Delete Student</button>
                </li>
                
                ))}
      </ol>
    );
      
    return(
        <div className="container">
            <br></br>
            
            <h4>Session Name: {session.name}</h4>
            <h5> Day: {session.day} - Size Limit: {session.sizeLimit}</h5>
            <h6>Registered Students</h6>
            
            {
                students({students, sessionId: session._id, deleteStudent})
            }
             
            <NewStudentForm addNewStudent={addNewStudent} /> 
        </div>
    );

};