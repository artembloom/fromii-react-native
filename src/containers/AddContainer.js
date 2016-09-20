import { connect } from 'react-redux'
import AddView from '../components/AddView'
import { postThing, changeTitle, changeDescription } from '../actions/add'
import { jumpToRoute } from '../actions/navigation'

const mapStateToProps = (state) => {
  return {
    add: state.add
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postThing: () => dispatch(postThing()),
    changeTitle: (title) => dispatch(changeTitle(title)),
    changeDescription: (description) => dispatch(changeDescription(description)),
    jumpToRoute: (route) => dispatch(jumpToRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddView)
