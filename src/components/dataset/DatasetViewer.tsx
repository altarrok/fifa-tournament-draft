import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { TPlayer } from './DatasetUploader'
import { useContext } from 'react'
import { DraftContext } from '~/draft-context/DraftContext'

const columnHelper = createColumnHelper<TPlayer>()

const columns = [
    columnHelper.accessor('picture', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Flag', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Name', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Age', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Position', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Overall', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Team_Image', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Team', {
        cell: info => info.getValue(),
    }),
]

export const DatasetViewer: React.FC = () => {
    const { database } = useContext(DraftContext);

    const table = useReactTable({
        data: database,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    
    return (
        <div className="w-full">
            <div className="relative overflow-x-auto shadow-md rounded-lg mt-2">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-stone-200">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <th key={header.id} colSpan={header.colSpan} className="px-6 py-3">
                                            {header.isPlaceholder ? null : (
                                                <div>
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </div>
                                            )}
                                        </th>
                                    )
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row, i) => {
                            return (
                                <tr
                                    key={row.id}
                                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b hover:bg-gray-100 transition-colors`}
                                >
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id} className="px-6 py-4">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}