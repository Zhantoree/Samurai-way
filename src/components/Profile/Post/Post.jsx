import s from "./Post.module.css"

export default function Post(props) {
    return(
        <div className={s.post}>
            <div className={s.user}>
                <div className={s.user_img}>
                    <img src={require('../../Header/assets/user_icon.png')} alt=""/>
                </div>
                <div className={s.user_info}>
                    <p className={s.user_name}>Karim Saif</p>
                    <p className={s.user_profession}>UI/UX Designer</p>
                </div>
            </div>
            <div className={s.post_inner}>
                <p className={s.post_text}>{props.text}</p>
                <p className={s.post_text}>like</p>
                <p className={s.post_text}>dislike</p>
            </div>
            <div className={s.post_img}>
                <img src="" alt=""/>
            </div>
        </div>
    )
}