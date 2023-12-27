import { type MRT_ColumnDef } from "mantine-react-table";
import { type Product } from "./types";
import dayjs from "dayjs";

export const expiredProducts: Product[] = [
    {
        name: 'Orange',
        code: 'IT0001',
        categoryName: 'Fruits',
        expiryDate: new Date()
    },
    {
        name: 'Pineapple',
        code: 'IT0002',
        categoryName: 'Fruits',
        expiryDate: new Date()
    },
    {
        name: 'Stawberry',
        code: 'IT0003',
        categoryName: 'Fruits',
        expiryDate: new Date()
    },
    {
        name: 'Avocat',
        code: 'IT0004',
        categoryName: 'Fruits',
        expiryDate: new Date()
    },
    {
        name: 'Apple',
        code: 'IT0005',
        categoryName: 'Fruits',
        expiryDate: new Date()
    },
    {
        name: 'Orange',
        code: 'IT0006',
        categoryName: 'Fruits',
        expiryDate: new Date()
    },
]

export const expiredProductsColumns: MRT_ColumnDef<Product>[] = [
    {
        accessorKey: 'code',
        header: 'Product Code',
    },
    {
        accessorKey: 'name',
        header: 'Product Name',
    },
    {
        accessorKey: 'brandName',
        header: 'Brand Name',
    },
    {
        accessorKey: 'categoryName',
        header: 'Category Name',
    },
    {
        accessorKey: 'expiryDate',
        header: 'Expiry Date',
        Cell: ({ cell }) => <span>{dayjs(cell.getValue<Date>()).format('DD/MM/YYYY')}</span>
    },
]