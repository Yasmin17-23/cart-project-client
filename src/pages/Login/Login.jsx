import React from 'react'
import loginImg from '../../assets/images/loginImg.jpg'
import { Link, useLocation, useNavigate } from 'react-router'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'

const Login = () => {
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try{
            const result = await signInUser(email, password);
            toast.success('Login Successfully!');
            navigate(location?.state ? location.state : '/');

        } catch (err) {
            console.log(err);
            toast.warning(err.message)
        }
       

        
    }
    return (
        <div className="hero  min-h-screen my-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:mr-8">
                    <h1 className="text-5xl font-bold text-center text-yellow-700">Login now!</h1>
                    <div>
                        <img src={loginImg} alt="" className='lg:mt-4' />
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}
                    className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control my-6">    
                                <button className="btn bg-yellow-600 text-white hover:bg-yellow-700 
                                 uppercase">Login
                                </button>
                        </div>
                    </form>
                    <SocialMedia></SocialMedia>
                    <p className='p-3 text-center'>New Here? Please Create Account 
                        <Link to="/signup" className='ml-2 text-green-700 font-bold'>SignUp</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login