import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAuth from './useAuth'


const useCart = () => {
    const { user } = useAuth();

    const { data: cart =[], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/carts?email=${user.email}`);
            return res.data;
        }
    })
  return [cart, refetch]
}

export default useCart