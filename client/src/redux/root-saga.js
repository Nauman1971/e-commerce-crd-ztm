import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.saga";

import { cartSagas } from "./cart/cart.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas),
        call(cartSagas),
    ])
}