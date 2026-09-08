import { all, takeEvery, call, put, delay, takeLatest } from "redux-saga/effects"
import { fetchUsersSucess, fetchUsersFailure, fetchUsersByIdFailure, fetchUsersByIdSucces } from "./slice"
import axios from "axios"

function* fetchUsers() {
    try {
        yield delay(2000)
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSucess(response.data))
        console.log(response.data)
    } catch (error) {
        yield put(fetchUsersFailure(error.message))
        console.log(error)
    }
}


function* fectchUserById(action) {
    try {
        const userId = action.payload
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
        yield put(fetchUsersSucess(response.data))
    } catch (error) {
        yield put(fetchUsersByIdFailure(error.message))
    }
}

export default all([
    takeLatest("user/fetchUsers", fetchUsers),
    takeEvery("User/fectchUserById", fectchUserById)
])