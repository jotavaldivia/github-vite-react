export type ProfileContextProps = {
  data: {
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
  };
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setData: (data: []) => void;
  userExists: boolean;
  setUserExists: (userExists: boolean) => void;
};
