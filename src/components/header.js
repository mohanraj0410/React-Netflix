import React, { useEffect } from "react";
import logo from "../img/Netflix_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <nav>
        <div>
          <img className="brand-logo" src={logo} alt="netflix logo" />
        </div>
        <div>
          {user && (
            <div>
              <p>sign out</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
