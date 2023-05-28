import s from "./UserItem.module.css"
import {followAC, unfollowAC} from "../../../redux/users-reducer";

export default function UserItem(props) {
    function onFollowClick() {
        props.followed ? props.unfollow(props.id) : props.follow(props.id)
        console.log(props.followed)
    }
    return(
        <div className={s.content}>
            <div className={s.userImg}>
                <img src={props.imgUrl} alt=""/>
                <button onClick={onFollowClick}>{props.followed ? "Follow" : "Unfollow"}</button>
            </div>
            <div className={s.userData}>
                <div className={`${s.userItem} ${s.a}`}>
                    <p className={s.userItem}>{props.fullName}</p>
                    <p className={s.userItem}>{props.country}, {props.city}</p>
                </div>
                <p className={s.userItem}>{props.status}</p>

            </div>
        </div>
    )
}