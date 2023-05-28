const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"
const UNFOLLOW = "UNFOLLOW"

let initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.followed = !u.followed
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        u.followed = !u.followed
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
    }
    return state;
}

export const followAC = (id) => ({type: "FOLLOW", userId: id})
export const unfollowAC = (id) => ({type: "UNFOLLOW", userId: id})
export const setUsersAC = (users) => ({type: "SET-USERS", users: users})

export default usersReducer;