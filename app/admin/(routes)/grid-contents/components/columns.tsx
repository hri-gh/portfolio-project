"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";

export type GridContentColumn = {
    id: string; // unique identifier for column
    header: string;
    title: string;
    createdAt: string;
}

export const columns: ColumnDef<GridContentColumn>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "header",
        header: "Header",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} /> // This 'row' is not related to ShadcnUI, it's related to tanstack/react-table
    }
]
