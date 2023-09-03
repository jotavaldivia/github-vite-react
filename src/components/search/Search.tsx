import { useContext, useState } from "react";
import { getProfile } from "../../services/profile";
import { ProfileContextProps } from "../../types";
import s from "./Search.module.css";
import logo_github from "../../assets/logo_github.png";
import ProfileContext from "../../context/profile";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const { setData, setLoading, setUserExists } = useContext(
    ProfileContext
  ) as ProfileContextProps;

  const profileSearch = () => {
    console.log(search);
    if (search === "") {
      setSearch("");
      return setLoading(false);
    }

    getProfile(search)
      .then((response) => {
        setData(response);
        setLoading(true);
        console.log(response);
        if (response.message === "Not Found") {
          setUserExists(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={s.containerSearch}>
      <img className={s.logo} src={logo_github} alt="" />
      <input
        className={s.search}
        type="text"
        placeholder="Buscar: Nombre Usuario..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value === "") {
            setData([]);
            setLoading(false);
          }
        }}
      />
      <button className={s.button} onClick={() => profileSearch()}>
        Buscar
      </button>
    </div>
  );
};

export default Search;
