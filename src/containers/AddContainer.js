import { connect } from 'react-redux'
import AddView from '../components/AddView'
import * as addActions from '../actions/add'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const postThing = () => {
  return (dispatch, getState) => {
    const { add } = getState()
    dispatch(addActions.postThing())
    return fetch(`${URL}/things`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.authorizationToken}`
      },
      body: JSON.stringify(add)
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(addActions.postThingSuccess(responseJson)))
    .catch((error) => dispatch(addActions.postThingError(error)))
  }
}

const mapStateToProps = (state) => {
  return {
    add: state.add
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postThing: () => dispatch(postThing()),
    onChangeTitle: (title) => dispatch(addActions.changeTitle(title)),
    onChangeDescription: (description) => dispatch(addActions.changeDescription(description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddView)
