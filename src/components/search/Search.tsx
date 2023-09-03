import s from "./Search.module.css";
import logo_github from "../../assets/logo_github.png";
const Search = () => {
  return (
    <div className={s.containerSearch}>
      <img className={s.logo} src={logo_github} alt="" />
      <input
        className={s.search}
        type="text"
        placeholder="Buscar: Nombre Usuario..."
      />
    </div>
  );
};

export default Search;
