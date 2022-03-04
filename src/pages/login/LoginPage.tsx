import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { authService } from '../../_services/auth.service'
import styles from './loginpage.module.scss'

function LoginPage() {
    return (
        <div className={styles.login}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    authService.login(values.email, values.password)
                }}
            >
                <Form className={styles.form}>
                    <span className={styles.form_header}>
                        <h1>Login</h1>
                    </span>
                    
                    <div className={styles.input_container}>
                        <Field name="email" type="email" placeholder="Email" />
                        <Field name="password" type="password" placeholder="Password" />
                    </div>
                    <button type="submit">Submit</button>
                    <div className={styles.login_links}>
                        <span className={styles.login_links__item}>
                            <a href='#'>
                                Forgot password?
                            </a>
                        </span>
                        <span className={styles.login_links__item}>
                            <a href='/registration'>
                                Don't have account?
                            </a>
                        </span>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage