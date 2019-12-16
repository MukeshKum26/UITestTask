import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import styles from './styles'
import TableComponent from '../../../components/Table'
import { fetchStudentList, deleteStudent } from '../../../redux-saga/actions/students'
import { columns } from './data'

class Student extends Component {
  componentDidMount() {
    const { props: { getStudents }} = this
    getStudents()
  }

  handleDelete = id => this.props.removeStudent(id)

  dataFormatter = (rows) => (
    rows.map(row => ({
      ...row,
      name: {
        label: 'Name',
        url: `/student/${row.id}`
      },
      action: {
        label: 'Delete',
        onClick:() => this.handleDelete(row.id)
      }
    }))
  )

  render() {
    const { student: { err, result }, classes, history: { push } } = this.props
    const rows = this.dataFormatter( result )
    if (result && result.length >= 0) {
      return (
        <div className={classes.rootDiv}>
          <Button
            onClick={() => push('/students/create')}
            className={classes.btnMargin}
            variant="outlined"
            color="primary">
              Add Student
          </Button>
          <Button
            onClick={() => push('/projects')}
            variant="outlined"
            color="secondary">
              Go To Projects
          </Button>
          <TableComponent items={rows} columns={columns} />
        </div>
        
      )
    } else if (err) {
      return <div> Error </div>
    }
    return (
      <div> Loading </div>
    )
  }   
}

const mapDispatchToProps = dispatch => ( {
  getStudents: () => dispatch(fetchStudentList()),
  removeStudent: id => dispatch(deleteStudent(id))
} )

const mapStateToProps = ({ student }) => ({
  student
})

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(Student)))