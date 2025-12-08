<!-- <script lang="ts">
  import { createSvelteTable, getCoreRowModel, flexRender } from '@tanstack/svelte-table'
  const data = [{ id: 1, name: 'Ada' }]
  const columns = [{ accessorKey: 'name', header: 'Name' }]
  const table = createSvelteTable({ data, columns, getCoreRowModel: getCoreRowModel() })
</script>

<table>
  <thead>
    {#each table.getHeaderGroups() as hg}
      <tr>
        {#each hg.headers as header}
          <th>{flexRender(header.column.columnDef.header, header.getContext())}</th>
        {/each}
      </tr>
    {/each}
  </thead>
  <tbody>
    {#each table.getRowModel().rows as row}
      <tr>
        {#each row.getVisibleCells() as cell}
          <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table> -->