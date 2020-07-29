//blogPosts actions generators
import moment from 'moment';
import database, { storage } from '../firebase/firebase';
export const createBlogPost = (blogPost) => ({
    type: "CREATE_BLOG",
    blogPost
});

export const startCreateBlogPost = (blogPostData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            title = "",
            content = "",
            quote = "",
            image = "",
            caption = "",
            user = "",
            date = moment().format('MMMM Do YYYY')
        } = blogPostData;
        const blogpost = { title, content, quote, image, caption, date, user }
        //users/${uid}/blogPosts
        return database.ref(`users/${uid}/blogPosts`).push(blogpost).then((ref) => {
            if (blogpost.image) {
                return storage.ref(`users/${uid}/blogPosts`).child(ref.key).put(blogpost.image, { contentType: blogpost.image.type })
                    .then((snapshot) => snapshot.ref.getDownloadURL()).then(image => {
                        return database.ref(`users/${uid}/blogPosts/${ref.key}`).child('image').set(image).then(() => {
                            dispatch(createBlogPost({
                                id: ref.key,
                                ...blogpost
                            }));
                        });
                    })

            } else {
                dispatch(createBlogPost({
                    id: ref.key,
                    ...blogpost
                }));
            }
        })
    }
};

export const editBlogPost = (id, updates = {}) => ({
    type: "EDIT_BLOG",
    id,
    updates
});

export const startEditBlogPost = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const image = updates.image;

        return database.ref(`users/${uid}/blogPosts/${id}`).update({ ...updates }).then(() => {
            if (!!updates.image && typeof updates.image !== "string") {
                return storage.ref(`users/${uid}/blogPosts`).child(id).put(image, { contentType: image.type })
                    .then((snapshot) => snapshot.ref.getDownloadURL()).then(image => {
                        return database.ref(`users/${uid}/blogPosts/${id}`).child('image').set(image).then(() => {
                            const newUpdates = { ...updates, image }
                            dispatch(editBlogPost(id, newUpdates));
                        })
                    })
            }
            else {
                dispatch(editBlogPost(id, updates));
            }
        })
    }
}

export const deleteBlogPost = ({ id }) => ({
    type: "DELETE_BLOG",
    id
});

export const startDeleteBlogPost = (id, image) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/blogPosts/${id}`).remove().then(() => {
            if (image) {
                return storage.ref(`users/${uid}/blogPosts`).child(id).delete().then(() => {
                    dispatch(deleteBlogPost({ id }));
                })
            }else{
                dispatch(deleteBlogPost({ id }))
            }

        });
    }
}

export const setBlogPosts = (blogPosts) => ({
    type: 'SET_BLOGPOSTS',
    blogPosts
});

export const strartSetBlogPosts = (userID = "") => {
    return (dispatch, getState) => {
        const uid = userID ? userID : getState().auth.uid;
        return database.ref(`users/${uid}/blogPosts`).once('value').then((snapshot) => {
            const blogPosts = [];
            snapshot.forEach((childSnapshot) => {
                blogPosts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setBlogPosts(blogPosts));
        })
    }
}

export const viewBlogPosts = (uid) => {
    return (dispatch) => {
        return database.ref(`users/${uid}/blogPosts`).once('value').then((snapshot) => {
            const blogPosts = [];
            //console.log(snapshot.val());
            snapshot.forEach((childSnapshot) => {
                blogPosts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setBlogPosts(blogPosts))
        })
    }
}

// export const uploadImage = () => {
//     const file 
// }
