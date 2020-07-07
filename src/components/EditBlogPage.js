import React from 'react';

const EditBlogPage = (props) => {
    console.log(props)
    return  (
        <div>
            Editttttttttt of {props.match.params.id}
        </div>
    );
}

export default EditBlogPage;