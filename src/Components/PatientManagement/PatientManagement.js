import React, { useReducer, useRef } from 'react';
import { initialState, patientReducer } from '../PatientReducer/PatientReducer';

const PatientManagement = () => {

    const nameRef=useRef()

    const [state, dispatch]=useReducer(patientReducer,initialState)

    const handleSubmit=event=>{
        event.preventDefault();
        
        dispatch({
        type:'ADD_PATIENT',
        name:nameRef.current.value,
        id:state.patient.length+1
    })
        nameRef.current.value=''

    }

    return (
        <div>
            <h3>Patient Management Count : {}</h3>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} name='name' type="text"/>  
            </form>
            {
                state.patient.map(pt=><li 
                    key={pt.id}
                    onClick={()=>dispatch({type:'REMOVE_PATIENT',id:pt.id})}
                    >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;