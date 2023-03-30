import React from "react";
import {NewStudentForm} from './NewStudentForm';

export const Session=(props)=>{
    const {session, updateSession} =props;

    
    const deleteStudent=(studentId)=>{
        const updatedSession={
            ...session,
            students: session.students.filter((x)=>x._id !==studentId)
        };

        updateSession(updatedSession);
    }

    const addNewStudent=(student)=>updateSession({...session, students: [...session.students, student]});

    const students=()=>(
        <ul>
            {session.students.map((student, index)=>(
                <li key={index}>
                    <label>{`${student.firstName} ${student.lastName} Grade: ${student.gradeLevel}`}</label>
                    <button onClick={(e)=>deleteStudent(student._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
    
    return(
        <div className="container">
            <h2>Session Name: {session.name}</h2>
            {
                students({students, sessionId: session._id, deleteStudent})
            }
            <NewStudentForm addNewStudent={addNewStudent} />
            <hr class="border border-success border-3 opacity-75"></hr>
        </div>
    );

};