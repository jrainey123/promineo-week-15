
const SESSIONS_ENDPOINT = 'https://640486a73bdc59fa8f3ad6f4.mockapi.io/School_Sessions_API/sessions';

class SessionsApi {
    get=async ()=>{
        try {
            const resp=await fetch(SESSIONS_ENDPOINT);
            const data=await resp.json();
            return data;
        }   catch(e) {
            console.log('There is an issue with fetchSession.', e);
        }
    }

    put=async(session)=>{
        try {
            const resp=await fetch(`${SESSIONS_ENDPOINT}/${session._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(session)
            });
          return await resp.json();  
        } catch(e) {
            console.log('There is an issue with updating sessions', e);
        }
    }
}

export const sessionsApi = new SessionsApi();