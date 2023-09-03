import s from "./Card.module.css";
import Search from "../search/Search";
import CardContent from "../cardContent/CardContent";
const Card = () => {
  return (
    <div className={s.containerCard}>
      <h1 className={s.titleCard}>PERFILES DE GITHUB</h1>
      <Search />
      <CardContent />
    </div>
  );
};

export default Card;
