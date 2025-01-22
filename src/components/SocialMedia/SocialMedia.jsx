import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const SocialMedia = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin = async socialLogin => {
        try{
             const result = await socialLogin()
             console.log(result);
             toast.success('Google Login Successfully!');
             navigate(location?.state ? location.state : '/')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }
    return (
        <div className='md:flex pb-4 pl-2 mx-auto'>
            <button onClick={() => handleSocialLogin(googleLogin)}
                className="btn bg-sky-300">
                <FcGoogle className='text-xl' />
                <p className='text-white'> Login With Google</p>
            </button>
        </div>
    )
}

export default SocialMedia