import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "../app/auth/authSlice";
import { FirebaseAuth } from "../firebase/config";
import { useDispatch, useSelector } from 'react-redux'



export const useCheckAuth = () => {
    const { status } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged( FirebaseAuth, async (user) => {
        if (!user) return dispatch(logout());
  
        const { displayName, email, photoURL, uid } = user;
  
        dispatch(login({ displayName, email, photoURL, uid }));
      });
    }, []);

    return status
  
    
}
