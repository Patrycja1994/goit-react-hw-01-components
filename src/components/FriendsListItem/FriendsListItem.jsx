import PropTypes from "prop-types";
import css from "./FriendsListItem.module.css";



export const FriendListItem = ({ avatar, name, isOnline}) => (
    <li className={css.item}>
  <span className={css.status}>
    { isOnline ? ( < span className = {css.online}></span>)
    : ( <span className = {css.offline}></span> )}
  </span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
) 

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  inOnline:PropTypes.bool,
}