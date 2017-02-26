import React from 'react';

export default function({ handleInput, handleSubmit, invalidName, invalidEmail, invalidTitle, invalidContent }) {
  return (
    <div>
      <h3>Add a Page</h3>
      <hr />
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
          <div className="col-sm-10">
            <input name="name" type="text" className={`form-control ${invalidName ? "danger" : ""}`} onChange={(e) => handleInput(e, 'name')} />
            { invalidName ? <small>Name cannot be blank</small> : null }
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
          <div className="col-sm-10">
            <input name="email" type="text" className={`form-control ${invalidEmail ? "danger" : ""}`} onChange={(e) => handleInput(e, 'email')}/>
            { invalidEmail ? <small>Email cannot be blank and must be a valid email</small> : null }
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
          <div className="col-sm-10">
            <input name="title" type="text" className={`form-control ${invalidTitle ? "danger" : ""}`} onChange={(e) => handleInput(e, 'title')}/>
            { invalidTitle ? <small>Title cannot be blank</small> : null }
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="col-sm-2 control-label">Content</label>
          <div className="col-sm-10">
            <textarea name="content" className={ invalidContent ? "danger" : "" } onChange={(e) => handleInput(e, 'content')}></textarea>
            { invalidContent ? <small>Content cannot be blank</small> : null }
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status" className="col-sm-2 control-label">Status</label>
          <div className="col-sm-10">
            <select name="status" onChange={(e) => handleInput(e, 'status')}>
              <option>open</option>
              <option>closed</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
          <div className="col-sm-10">
            <input name="tags" type="text" className="form-control" onChange={(e) => handleInput(e, 'tags')}/>
          </div>
        </div>

        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-primary">submit</button>
        </div>

      </form>
    </div>
  );
}

