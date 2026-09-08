import { all, takeEvery } from "redux-saga/effects"

function* fetchUsers() {
    console.log("Chamou o saga")
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])