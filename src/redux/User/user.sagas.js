import { takeLatest, call, all, put, take } from 'redux-saga/effects';
import { auth, handleUserProfile, getCurrentUser, firestore } from './../../firebase/utils';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, userError, updatedUserSuccess, fetchAllUsersSuccess } from './user.actions';
import { handleFetchUsers } from './user.helpers';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );

  } catch (err) {
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);

  } catch (err) {
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);

  } catch (err) {
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(
      signOutUserSuccess()
    )

  } catch (err) {
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({ payload: {
  displayName,
  email,
  groupID,
  password,
  confirmPassword
} }) {

  if (password !== confirmPassword) {
    const err = ['Password Don\'t match'];
    yield put(
      userError(err)
    );
    return;
  }

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = { displayName, groupID };
    yield getSnapshotFromUserAuth(user, additionalData);

  } catch (err) {
    alert(err)
  }
}

export function* getSnapshotFromUser(updatedUser = {}) {
  try {
    const snapshot = yield updatedUser.get();
    yield put(
      updatedUserSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );
  }
  catch (err) {

  }
}

export function* updateGroupsForUser({ payload: { groupName } }) {

  try {
    const user = yield getCurrentUser();
    const userID = user.uid;

    const userRef = yield firestore.collection('users').doc(userID).get();
    const snapshotUser = userRef.data();
    const groupArray = snapshotUser.groupID;
    groupArray.push(groupName);

    yield firestore.collection('users').doc(userID).update({ groupID: groupArray })
    const updatedUserRef = firestore.collection('users').doc(userID);

    yield getSnapshotFromUser(updatedUserRef);
  }
  catch (err) {

  }
}

export function* fetchUsers() {
  try {
    const usersArray = yield handleFetchUsers();
    const numOfUsers = usersArray.length;
    const randNumb = Math.floor(Math.random() * (numOfUsers));
    let chosenUser = usersArray[randNumb];
    yield put(
      fetchAllUsersSuccess(chosenUser)
    );
  }
  catch (err) {
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* onUpdateGroupsForUser() {
  yield takeLatest(userTypes.UPDATE_GROUPS_FOR_USER, updateGroupsForUser);
}

export function* onFetchAllUsers() {
  yield takeLatest(userTypes.FETCH_ALL_USERS, fetchUsers)
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onUpdateGroupsForUser),
    call(onFetchAllUsers)
  ])
}