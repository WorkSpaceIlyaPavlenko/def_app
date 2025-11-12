// import { useEffect, useState } from 'react'
// import { useNavigate, Outlet } from 'react-router-dom'
// import Cookies from 'js-cookie'
// import { useDispatch } from 'react-redux'
// import { AppDispatch } from '@store/store'
// import { setLoginOpen } from '@features/auth/model/loginWindowStateSlice'

// export default function GuardAdmin() {
//   const dispatch = useDispatch<AppDispatch>()
//   const navigate = useNavigate()
//   const [isRole, setRole] = useState(false)

//   useEffect(() => {
//     const token = Cookies.get('accessToken')
//     const role = Cookies.get('role')
    
//     if (!token || role !== 'admin') {
//       dispatch(setLoginOpen())
//       navigate('/', { replace: true })
      
//     }else{
//         setRole(true)
//     }
//   }, [])

//   return isRole ? <Outlet /> : null
// }