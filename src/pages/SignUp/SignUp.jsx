import React from 'react'
import signupImg from '../../assets/images/signup.jpg'
import { Link, useNavigate } from 'react-router'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'

const SignUp = () => {
    const { createUser }  = useAuth();
    const navigate = useNavigate();
    
    const handleSignUp = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        try{
            const result = await createUser(email, password)
            toast.success('SignUp Successfully!');
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err.messgae)
        }


        
    }
    return (
        <div className="hero  min-h-screen my-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:mr-8">
                    <div>
                        <h1 className="text-5xl font-bold text-center text-yellow-700">Please SignUp now!</h1>
                        <p className='py-4'>If you are new client our website, please create an account and enjoy our product.</p>
                    </div>
                    <div>
                        <img src={signupImg} alt="" className='lg:mt-4' />
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp}
                      className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required />
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
                        <div className="form-control mt-6">

                            <button className="btn bg-yellow-600 text-white hover:bg-yellow-700 
                                   uppercase">Sign Up
                            </button>
                        </div>
                    </form>
                    <SocialMedia></SocialMedia>
                    <p className='p-3 text-center'>Already have an account, Please
                        <Link to="/login" className='ml-2 text-green-700 font-bold'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp