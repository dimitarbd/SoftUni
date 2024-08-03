import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function LoginRegister() {
    const login = useLogin();
    const navigate = useNavigate();


    const initialValues = { email: '', password: '' };

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);




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
                        name="email"
                        placeholder="Enter your email"
                    />
                    <input
                        type="password"
                        placeholder="Create password"
                    />
                    <input
                        type="repass"
                        placeholder="Repeat password"
                    />
                    <button type="button" className="btn signup">create account</button>
                    <p>Clicking <strong>create account</strong> means that you are agree to our <a href="#">terms of services</a>.</p>
                    <hr />

                </form>
            </div>

        </div>
    );
}