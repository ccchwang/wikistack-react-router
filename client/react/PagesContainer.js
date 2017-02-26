import { connect } from 'react-redux'
import WikiPages from './WikiPages'

export default connect(
  (state) => {
    return {
      pages: state.pages
    }
  }, null
)(WikiPages)
