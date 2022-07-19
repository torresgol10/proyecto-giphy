import { useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import registerService from 'service/register';

export default function Register() {
    const { handleSubmit, register, formState: { errors } , setError } = useForm();
    const [registered, setRegistered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (values) => {
        registerService(values)
            .then(() => setRegistered(true))
            .catch(() => {
                setRegistered(false)
                setError('username', 'El usuario ya existe');
            })
    }

    if (registered) {
        return <h2>Congratulations ! You´ve been successfully registeres!</h2>
    }

    return (
        <div>
            <h2>Formulario de registro</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="username" placeholder='username'  
                {...register("username", {
                    required: "Required",

                })} />
                <ErrorMessage name="username" as="small" style={{ color: 'red' }} errors={errors}
/>

                <input type="password" name="password" placeholder='password' {...register("password", {
                    required: "Required",
                    minLength: {
                        value: 3,
                        message: "Password must be at least 3 characters"
                    }
                })}  />
                
                <ErrorMessage name="password" as="small" style={{ color: 'red' }} errors={errors}
/>

                <button type="submit" disabled={isSubmitting} >Registrarse</button>
            </form>
        </div>
    );
}