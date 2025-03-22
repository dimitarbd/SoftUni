import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Other</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Login & Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Breadcrumb Area End Here --> */}
            {/* <!-- Begin Uren's Login Register Area --> */}
            <div className="uren-login-register_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6">
                            {/* <!-- Login Form s--> */}
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <label>Email Address*</label>
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Password</label>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box">
                                                <input type="checkbox" id="remember_me" />
                                                <label htmlFor="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="forgotton-password_info">
                                                <a href="#"> Forgotten pasward?</a>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="uren-login_btn">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Login Register Area  End Here --> */}
        </>
    );
}