import s from "./Post.module.css"



export default function Post(props) {
    return(
        <div className={s.post}>
            <div className={s.user}>
                <div className={s.user_img}>
                    <img src={require('../../Header/assets/user_icon.png')} alt=""/>
                </div>
                <div className={s.user_info}>
                    <p className={s.user_name}>{props.name}</p>
                    <p className={s.user_profession}>{props.profession}</p>
                </div>
            </div>
            <div className={s.post_inner}>
                <p className={s.post_text}>{props.text}</p>
                <div className={s.rating}>
                    <p className={s.rating_inner}>like</p>
                    <p className={s.rating_inner}>dislike</p>
                </div>

            </div>
            {/*<div className={s.post_img}>*/}
            {/*    <img src="" alt=""/>*/}
            {/*</div>*/}
        </div>
    )
}