import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Abdul Ahad",
      profilePic:
        "https://media.licdn.com/dms/image/D5603AQHgzl2zw3fw8w/profile-displayphoto-shrink_800_800/0/1694108787694?e=1700697600&v=beta&t=6-SF4gGK_cThZAxw0c-F7g1q8HdNjzoEXPR7LoroxKs",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
