import React from 'react';
import cl from './AddPost.module.css';
import { Formik, Form, Field } from 'formik';

const AddPost = (props) => {
  return (
    <div className={cl.add_post}>
      <AddPostForm onAddPost={props.onAddPost} />
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <Formik
      initialValues={{ newPostBody: '' }}
      onSubmit={(values) => {
        props.onAddPost(values.newPostBody);
      }}
    >
      {() => (
        <Form>
          <div className={cl.post_textarea}>
            <Field component={'textarea'} name={'newPostBody'} placeholder={'Enter your post'} />
          </div>

          <div className={cl.add_post_button}>
            <button type={'submit'}>Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddPost;
