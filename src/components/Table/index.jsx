import React from 'react'
import Table from '@material-ui/core/Table';

import TableBody from './TableBody'
import TableHeader from './TableHeader'

const TableComponent = ({
	columns,
	items
}) => {
	return (
		<Table>
			<TableHeader columns={columns}/>
			<TableBody items={items} columns={columns}/>
		</Table>
	)
}

export default TableComponent