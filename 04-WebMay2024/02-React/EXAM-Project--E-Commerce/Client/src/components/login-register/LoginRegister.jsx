import { useNavigate } from 'react-router-dom';
import { useLogin, useRegister } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const initialValues = { email: '', password: '', regemail: '', regpassword: '', repass: '' };

export default function LoginRegister() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();


    const registerHandler = async ({ values }) => {
        if (values.regpassword !== values.repass) {
            return setError('Password missmatch!');
        }


        try {
            await register(values.regemail, values.regpassword);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };


    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };


    const register = useRegister();


    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler, registerHandler);

    function toggleSignup() {
        document.getElementById('login-toggle').style.backgroundColor = '#fff';
        document.getElementById('login-toggle').style.color = '#222';
        document.getElementById('signup-toggle').style.backgroundColor = '#57b846';
        document.getElementById('signup-toggle').style.color = '#fff';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }


    function toggleLogin() {
        document.getElementById('login-toggle').style.backgroundColor = '#57B846';
        document.getElementById('login-toggle').style.color = '#fff';
        document.getElementById('signup-toggle').style.backgroundColor = '#fff';
        document.getElementById('signup-toggle').style.color = '#222';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }


    return (
        <div className="form-modal" >

            <div className="form-toggle">
                <button id="login-toggle" onClick={toggleLogin}>log in</button>
                <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
            </div>

            <div id="login-form">
                <form >
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Enter email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Enter password"
                    />
                    <button type="button" className="btn login" onClick={submitHandler}>login</button>

                    <hr />

                </form>
            </div>

            <div id="signup-form">
                <form>
                    <input
                        type="email"
                        name="regemail"
                        value={values.regemail}
                        onChange={changeHandler}
                        placeholder="Enter your email"
                    />
                    <input
                        type="password"
                        name="regpassword"
                        value={values.regpassword}
                        onChange={changeHandler}
                        placeholder="Create password"
                    />
                    <input
                        type="password"
                        name="repass"
                        value={values.repass}
                        onChange={changeHandler}
                        placeholder="Repeat password"
                    />

                    {error && (
                        <p>
                            <span style={{ fontSize: '18px', color: 'red'}}>{error.message}</span>
                        </p>
                    )}

                    <button type="button" className="btn signup" onClick={submitHandler}>create account</button>
                    <p>Clicking <strong>create account</strong> means that you are agree to our <a href="#">terms of services</a>.</p>
                    <hr />

                </form>
            </div>

        </div>
    );
}