import UserItem from "./UserItem/UserItem";

export default function Users(props) {
    if(props.users.length===0){
        props.setUsers([
            {id: 1,
                imgUrl: "https://cdns-images.dzcdn.net/images/cover/05b122aa4ed1997e6f5bff27f8c73c6c/264x264.jpg",
                followed: true, fullName: "Kairat Nurtas", city: "Almaty", country: "Kazakhstan", status: "I am singer"},
            {id: 2,
                imgUrl: "https://c-cl.cdn.smule.com/rs-s81/arr/7c/de/024ae2a8-cce3-4236-ba0c-d3ee56681895.jpg",
                followed: false, fullName: "Toregaly Toreali", city: "Astana", country: "Kazakhstan", status: "I am singer"},
            {id: 3,
                imgUrl: "https://c-cl.cdn.smule.com/smule-gg-s-sf-bck2/arr/99/70/b66c3bf4-43b1-4eee-85d7-aab8f7000707.jpg",
                followed: true, fullName: "Erke Esmakhan", city: "Shymkent", country: "Kazakhstan", status: "I am singer"},
            {id: 4,
                imgUrl: "https://show-biz.by/blog/image/blog_image/4179/large/_v=64d081576135562",
                followed: false, fullName: "Dimash Kudaibergen", city: "Kyzylorda", country: "Kazakhstan", status: "I am singer"},
        ])
    }

    return(
        <div>
            {props.users.map(u => {
                return <UserItem fullName={u.fullName}
                                 id={u.id}
                                 imgUrl={u.imgUrl}
                                 country={u.country}
                                 city={u.city}
                                 status={u.status}
                                 followed={u.followed}
                                 follow={props.follow}
                                 unfollow={props.unfollow}
                />
            })}
        </div>
    );
}