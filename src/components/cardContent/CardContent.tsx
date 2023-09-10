import { useContext } from "react";
import ProfileContext from "../../context/profile";
import s from './CardContent.module.css'
const CardContent = () => {
  type ProfileContextProps = {
    data: {
      avatar_url: string;
      name: string;
      html_url: string;
      bio: string;
      location: string;
      company: string | null;
      public_repos: number;
      followers: number;
      following: number;
      blog: string;
    };
    loading: boolean;
  };
  const { data, loading } = useContext(ProfileContext) as ProfileContextProps;

  return (
    <div className={s.container}>
      {loading ? (
      <>
          <div className={s.bio}>
          <img src={data.avatar_url} alt="avatar" />
          <h1>{data.name}</h1>
          <p>{data.html_url}</p>
          <p>{data.bio}</p>
          <p>{data.blog}</p>
          </div>
          <div className={s.info}>
          <p>{data.location}</p>
          <p>{data.company}</p>
          <p>{data.public_repos}</p>
          <p>{data.followers}</p>
          <p>{data.following}</p>
          </div>
          </>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default CardContent;
