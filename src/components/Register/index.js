import { Formik, Field, Form, ErrorMessage } from 'formik';
import registerService from 'service/register';

const validateFields = (values) => {
    const error = {}

    if (!values.username) {
        error.username = 'El nombre de usuario es requerido'
    }

    if (!values.password) {
        error.password = 'La contraseña es requerida'
    } else if (values.password.length < 3) {
        error.password = 'La contraseña debe tener al menos 3 caracteres'
    }

    return error;
}

const handlerSubmit = (values, { setFieldError }) => {
    return registerService(values).catch((error) => {
        setFieldError('username', 'El usuario ya existe');
    });
}

export default function Register() {

    return (
        <div>
            <h2>Formulario de registro</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={validateFields}
                onSubmit={handlerSubmit}
            >
                {
                    ({ isSubmitting }) =>
                        <Form className='form'>
                            <Field type="text" name="username" placeholder='username' />

                            <ErrorMessage name="username" component="small" style={{ color: 'red' }}/>

                            <Field type="password" name="password" placeholder='password' />

                            <ErrorMessage name="password" component="small" style={{ color: 'red' }}/>

                            <button type="submit" disabled={isSubmitting} >Registrarse</button>
                        </Form>
                }
            </Formik>
        </div>
    );
}