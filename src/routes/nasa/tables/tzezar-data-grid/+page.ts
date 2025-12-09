import {
	accessorColumn,
	columnGroup,
	computedColumn,
	displayColumn,
	type ColumnDef
} from '$lib/datagrid/index.js';

export const columns = [
	// Simple column using direct data access
	accessorColumn({
		accessorKey: 'id'
	}),

	// Group of related columns
	columnGroup({
		header: 'Product',
		columns: [
			accessorColumn({
				accessorKey: 'name'
			}),
			computedColumn({
				header: 'Price',
				getValueFn: (row) => `${row.price.retail} ${row.price.currency}`
			})
		]
	}),

	// Custom display column (e.g., for expansion controls)
	displayColumn({
		columnId: 'expansion',
		header: '',
		cell: () => '<div>+</div>'
	})
] satisfies ColumnDef<InventoryItem>[];