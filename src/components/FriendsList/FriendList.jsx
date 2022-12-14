import PropTypes from "prop-types";
import css from "./FriendsList.module.css";
import { FriendListItem } from "components/FriendsListItem/FriendsListItem";


export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
            {
                friends.map (friend => (
                    <FriendListItem
                    key = {friend.id}
                    avatar = {friend.avatar}
                    name = {friend.name}
                    isOnline = {friend.isOnline}
                    />
                ))
            }
    </ul>
)


FriendList.propTypes = {
    friends: PropTypes.arrayOf  ( 
        PropTypes.shape ({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    )
}