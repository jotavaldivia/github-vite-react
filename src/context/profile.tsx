import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getProfile } from "../services/profile";

interface ProfileContextProps {
  avatar_url: string;
  name: string;
  tml_url: string;
  bio: string;
  location: string;
  company: string | null;
  public_repos: number;
  followers: number;
  following: number;
  blog: string;
}

const InitialState: ProfileContextProps = {
  avatar_url: "",
  name: "",
  tml_url: "",
  bio: "",
  location: "",
  company: "",
  public_repos: 0,
  followers: 0,
  following: 0,
  blog: "",
};

const ProfileContext = createContext({});

export function ProfileProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState([InitialState]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProfile("jotavaldivia").then((response) => {
      setData(response);
      setLoading(true);
    });
  }, []);

  return (
    <ProfileContext.Provider value={{ data, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
