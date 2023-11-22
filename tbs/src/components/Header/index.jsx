import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as action from "../../config/redux/auth/action";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { token } = useSelector((state) => state.Auth.user)
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // automatically authenticate user if token is found
  useEffect(() => {
    if(token){
        dispatch(action.GetUserDetails({ token }))
        if (pathname.startsWith('/login')) {
            navigate('/homepage')
        }
    } else {
        // redirect to login
        if (!pathname.startsWith('/login')) {
            navigate('/login')
        }
    }
  }, [])


  return (
    <header>
      {/* header markup */}
    </header>
  )
}
export default Header