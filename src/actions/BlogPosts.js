//blogPosts actions generators
import moment from 'moment';
import database, { storage } from '../firebase/firebase';
export const createBlogPost = (blogPost) => ({
    type: "CREATE_BLOG",
    blogPost
});

export const startCreateBlogPost = (blogPostData = {}) => {
    return (dispatch) => {
        const {
            title = "",
            content = "",
            quote = "",
            image = 0,
            caption = "",
            date = moment().format('MMMM Do YYYY')
        } = blogPostData;
        const blogpost = { title, content, quote, image, caption, date }
        console.log(blogpost.image);

        return database.ref('blogPosts').push(blogpost).then((ref) => {
            return storage.ref().child(ref.key).put(blogpost.image, { contentType: blogpost.image.type })
            .then((snapshot) => snapshot.ref.getDownloadURL()).then(image => {
                return database.ref('blogPosts').child(ref.key).child('image').set(image).then(() => {
                    dispatch(createBlogPost({
                        id: ref.key,
                        ...blogpost
                    }));
                });
            })
        })
    }
};

export const editBlogPost = (id, updates = {}) => ({
    type: "EDIT_BLOG",
    id,
    updates
});

export const startEditBlogPost = (id, updates) => {
    return (dispatch) => {
        return database.ref(`blogPosts/${id}`).update({ ...updates }).then(() => {
            dispatch(editBlogPost(id, updates));
        })
    }
}

export const deleteBlogPost = ({ id }) => ({
    type: "DELETE_BLOG",
    id
});

export const startDeleteBlogPost = (id) => {
    return (dispatch) => {
        return database.ref(`blogPosts/${id}`).remove().then(() => {
            return storage.ref().child(id).delete().then(() => {
                dispatch(deleteBlogPost({ id }));
            })
            
        });
    }
}

export const setBlogPosts = (blogPosts) => ({
    type: 'SET_BLOGPOSTS',
    blogPosts
});

export const strartSetBlogPosts = () => {
    return (dispatch) => {
        return database.ref('blogPosts').once('value').then((snapshot) => {
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

// export const uploadImage = () => {
//     const file 
// }
