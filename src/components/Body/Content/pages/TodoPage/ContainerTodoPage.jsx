import React from "react";
import TodoPage from './TodoPage'
import { connect } from 'react-redux'
import { setmainTitleAc, mainTitle } from './../../../../../bll/item-reducer'

class ContainerTodoPage extends React.Component {


  componentDidMount() {
    this.props.setmainTitleAc('TO DO');
  }

  render() {

    return <TodoPage />
  }
}

const mapStateToProps = (state) => {
  return {
    mainTitle: state.itemReducer.mainTitle
  }
}

const mapDispatchToProps = ({
  setmainTitleAc
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTodoPage);
