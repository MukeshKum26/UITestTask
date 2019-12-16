import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    const { studentList: { err, result } } = this.props
    const rows = this.dataFormatter( result )
    if (result && result.length > 0) {
      return (
        <TableComponent items={rows} columns={columns} />
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

const mapStateToProps = ({ studentList }) => ({
  studentList
})

export default connect( mapStateToProps, mapDispatchToProps )(Student)