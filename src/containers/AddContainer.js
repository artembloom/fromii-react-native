import { connect } from 'react-redux'
import AddView from '../components/AddView'
import { postThing, changeTitle, changeDescription } from '../actions/add'

const mapStateToProps = (state) => {
  return {
    add: state.add
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postThing: () => dispatch(postThing()),
    changeTitle: (title) => dispatch(changeTitle(title)),
    changeDescription: (description) => dispatch(changeDescription(description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddView)
