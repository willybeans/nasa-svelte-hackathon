<script lang="ts">
	import { DataTable } from '@careswitch/svelte-data-table';

	const table = new DataTable({
		data: [
			{ id: 1, name: 'John Doe', status: 'active' },
			{ id: 2, name: 'Jane Doe', status: 'inactive' }
		],
		columns: [
			{ id: 'id', key: 'id', name: 'ID' },
			{ id: 'name', key: 'name', name: 'Name' },
			{ id: 'status', key: 'status', name: 'Status' }
		]
	});
</script>

<table>
	<thead>
		<tr>
			{#each table.columns as column (column.id)}
				<th>{column.name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each table.rows as row (row.id)}
			<tr>
				{#each table.columns as column (column.id)}
					<td>{row[column.key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>