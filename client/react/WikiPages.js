import React from 'react';
import { Link } from 'react-router';

export default function({ pages }) {

  return (
    <div>
      <h3>Pages</h3>
      <hr />
      <form>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <hr />
      <ul>

        { pages && pages.map(page =>
          <li key={page.id}><Link to={`/wiki/${page.urlTitle}`}>{page.title}</Link></li>)
        }

      </ul>
    </div>
  );

}
