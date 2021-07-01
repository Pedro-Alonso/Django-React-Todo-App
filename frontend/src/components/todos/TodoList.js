import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/todos';

function TodoList() {

}

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    { getTodos }
)(TodoList)