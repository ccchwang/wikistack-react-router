import axios from 'axios';
import { browserHistory } from 'react-router'

export const receivePage = (page) => {
  return {
    type: "RECEIVE_PAGE",
    page
  }
}

export const receivePages = (pages) => {
  return {
    type: "RECEIVE_PAGES",
    pages
  }
}

export const selectPage = (page) => {
  return {
    type: "SELECT_PAGE",
    page
  }
}

export const createPage = (pageInfo) => {
  return (dispatch) => {
    axios.post('/api/wiki', pageInfo)
       .then(page => {
         dispatch(receivePage(page.data))
         const path = `/wiki/${page.data.urlTitle}`;
         browserHistory.push(path)
        })
  }
}

export const deletePage = (title) => {
  return (dispatch) => {
    axios.get(`/api/wiki/${title}/delete`)
       .then(() => {
         const path = '/wiki';
         browserHistory.push(path)
       })
  }
}


