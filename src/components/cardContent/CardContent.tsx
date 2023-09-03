import { useContext } from "react";
import ProfileContext from "../../context/profile";
import { ProfileContextProps } from "../../types";
import s from "./CardContent.module.css";
import spinner from "../../assets/spinner.gif";
const CardContent = () => {
  const { data, loading } = useContext(ProfileContext) as ProfileContextProps;

  return (
    <div className={s.containerContent}>
      {loading ? (
        <div>
          <img src={data.avatar_url} alt="avatar" />
          <h1>{data.name}</h1>
          <p>{data.bio}</p>
          <p>{data.location}</p>
          <p>{data.company}</p>
          <p>{data.public_repos}</p>
          <p>{data.followers}</p>
          <p>{data.following}</p>
          <p>{data.blog}</p>
        </div>
      ) : (
        <div className={s.containerLoading}>
          <p>Busca información resumida de cualquier perfil de GitHub</p>
          <img src={spinner} />
        </div>
      )}
    </div>
  );
};

export default CardContent;
