import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableHeader = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        { columns.map(column => (
          <TableCell
            key={ column.label }
          >
            { column.label }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader