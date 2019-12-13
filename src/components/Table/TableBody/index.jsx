import React, { useCallback } from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Button, Link } from '@material-ui/core'

const TableBodyComponent = ({ items, columns }) => {
  console.log("ooooooooooooooooooooooooooooo", items)
  const rowMapper = useCallback((rowItem, column) => {
    if (column.type === 'actionBtn') {
      return (
        <Button onClick={rowItem[column.id].onClick}>
          {rowItem[column.id].label}
        </Button>
      )
    }
    if (column.type === 'urlBtn') {
      return (
        <Link href={rowItem[column.id].url}>
          {rowItem[column.id].label}
        </Link>
      )
    }
    return (
      <>
        {rowItem[column.id]}
      </>
    )
  }, [])
  return (
    <TableBody>
      { items.map(row => (
        <TableRow key={row.id}>
          {columns.map( column => (
            <TableCell key={ column.id }>
              { rowMapper(row, column )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TableBodyComponent
