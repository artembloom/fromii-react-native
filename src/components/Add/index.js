import { connect } from 'react-redux'
import AddView from './AddView'
import { postThing, changeTitle, changeDescription } from './actions'

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
    //jumpToRoute: (route) => dispatch(jumpToRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddView)
