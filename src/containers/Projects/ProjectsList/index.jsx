import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableComponent from '../../../components/Table'
import { fetchProjectList, deleteProject } from '../../../redux-saga/actions/projects'
import { columns } from './data'

class ProjectsList extends Component {
  componentDidMount() {
    const { props: { getProjects }} = this
    getProjects()
  }

  handleDelete = id => this.props.removeProject(id)

  dataFormatter = (rows) => (
    rows.map(row => ({
      ...row,
      name: {
        label: row.name,
        url: `/project/${row.id}`
      },
      repoUrl: {
        label: row.repoUrl,
        url: `/project/${row.id}`
      },
      liveUrl: {
        label: row.liveUrl,
        url: `/project/${row.id}`
      },
      action: {
        label: 'Delete',
        onClick:() => this.handleDelete(row.id)
      }
    }))
  )

  render() {
    const { projectsList: { err, result } } = this.props
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
  getProjects: () => dispatch(fetchProjectList()),
  removeProject: id => dispatch(deleteProject(id))
} )

const mapStateToProps = ({ projectsList }) => ({
  projectsList
})

export default connect( mapStateToProps, mapDispatchToProps )(ProjectsList)