import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { GeneralInformation } from "./GeneralInformation";
import { expiredProductsColumns, expiredProducts } from "@apis/products/mocks.tsx"
import { Title } from "@mantine/core";

const Page = () => {

    const expiryProductTable = useMantineReactTable({
        columns: expiredProductsColumns,
        data: expiredProducts,
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        enableRowNumbers: true,
        renderTopToolbarCustomActions: () => (
            <Title order={4}>Expired Products</Title>
        )
    });

    return (
        <div className="flex flex-col gap-4">
            <GeneralInformation />
            <MantineReactTable table={expiryProductTable} />
        </div>
    )
}

export default Page;