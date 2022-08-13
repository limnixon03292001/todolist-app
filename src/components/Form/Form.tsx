import React, { useState } from 'react';
import { BsTextLeft } from 'react-icons/bs';
import { FinalActionType } from '../../types/Types';

import styles from './form.module.css';

type FormProps = {
    dispatch: React.Dispatch<FinalActionType>
}

const Form = ({ dispatch }: FormProps) => {

    const [data, setdata] = useState('');

    function submit (e: React.FormEvent<HTMLFormElement>): void{
        e.preventDefault();
        dispatch({type: 'adding', payload: { data: data }})
        setdata('');
    }

  return (
    <div className={styles.form_container}>
        <form onSubmit={submit} >
            <div className={styles.input_container}>
            <span className={styles.icon}> <BsTextLeft color="#C4C4C4" size="1.4rem" fontWeight="light"/></span>
                <input type="text" placeholder="Add a task..." onChange={(e) => setdata(e.target.value)} value={data}/>
            </div>
        </form>
    </div>
  )
}

export default Form