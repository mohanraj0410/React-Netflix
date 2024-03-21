import React, { useEffect } from "react";
import logo from "../img/Netflix_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  let handleCheckSignOut=()=>{
    signOut(auth).then(()=>{

    }).catch((error)=>{
      navigate("/")
    })
  }

  return (
    <div>
      <nav>
        <div>
          <img className="brand-logo" src={logo} alt="netflix logo" />
        </div>
        <div className="signIn-user">
          {user && (
            <>
              <div className="signIn-profile">
                <FaUser className="user-icon"/>
                <p>{user.displayName}</p>
              </div>
              <button className="signOut-Button" onClick={handleCheckSignOut}>sign out</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
