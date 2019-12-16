import React, { Component } from 'react'
import { Button, withStyles } from '@material-ui/core'
import { connect } from 'react-redux'

import Form from './../../../components/Form'
import { fields } from './formData'
import {
  fetchStudentDetails,
  addStudent,
  updateStudent
} from '../../../redux-saga/actions/students'
import styles from './style.js'

class StudentDetails extends Component {
  state = {}

  get studentId() {
    const { match: { params } } = this.props
    if (params && params.id) return params.id
    else return null
  }

  componentDidMount() {
    const { match: { params }, getStudentDetails } = this.props
    if (params && params.id && params.id !== 'create') {
      getStudentDetails(this.studentId)
    }
  }

  onChange = ( {target: { value } }, name) => {
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    const { updateStudent, addNewStudent, studentDetails: { result: { id } } } = this.props
    if (id) {
      updateStudent(id, {
        ...this.props.studentDetails.result,
        ...this.state
      })
    } else {
      addNewStudent({...this.state})
    }
  }

  render() {
    const { handleSubmit, onChange, props: { studentDetails, classes } } = this

    return (
      <div>
        <Form
          formFields={fields}
          fieldValues={studentDetails.result}
          onChange={onChange}
          stateField={this.state}
        />
        <Button
          className={classes.submitBtn}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          {studentDetails.result && studentDetails.result.id ? 'Update Student' : 'Add Student'}
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ( {
  getStudentDetails: id => dispatch(fetchStudentDetails(id)),
  addNewStudent: studentData => dispatch(addStudent(studentData)),
  updateStudent: (id, studentData) => dispatch(updateStudent({id, studentData}))
} )

const mapStateToProps = ({ studentDetails }) => ({
  studentDetails
})

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(styles)(StudentDetails))
