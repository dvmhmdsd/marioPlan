export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.fName,
            authorLastName: profile.lName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_PROJECT', project });
        }).catch((err)=> {
            dispatch({ type: 'ADD_PROJECT_ERROR', err });
        });
    }
}