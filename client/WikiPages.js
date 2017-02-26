import React, { Component } from 'react';

export default class WikiPages extends Component {

  render () {
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <form>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <hr />
        <ul className="list-unstyled">
          <ul>
            {/* List each page title in this space */}
            <li>
              <a href="">PAGE TITLE GOES HERE</a>
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}
