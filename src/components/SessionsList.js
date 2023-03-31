import React from "react";
import {Session} from './Session';
import {sessionsApi} from '../rest/SessionsApi.js';

export class SessionsList extends React.Component {
    state={
        sessions: []
    };

    componentDidMount(){
        this.fetchSessions();
    }

    fetchSessions=async ()=>{
        const sessions=await sessionsApi.get();
        this.setState({sessions});
    };

    updateSession=async (updatedSession)=>{
        await sessionsApi.put(updatedSession);
        this.fetchSessions();
    };

    render(){
        return(
            <div className='session-list'>
                {this.state.sessions.map((session)=>(
                    <Session
                    session={{...session, _id:session._id}}
                    key={session._id}
                    updateSession={this.updateSession}
                />    
                ))}
            </div>
        )
    }

}