import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    // brackets are optional
    [selectUser],
    user => user.currentUser
)