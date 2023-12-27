import { memo } from "react";
import { ColorSwatch, Text, Title } from "@mantine/core";
import { IconArrowDown, IconArrowUp, IconAssembly, IconFile, IconFileInvoice, IconReportMoney, IconUserStar, IconUsers } from "@tabler/icons-react";

export const GeneralInformation = memo(function GeneralInformation() {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <div className="flex flex-row items-center gap-3 border border-solid border-stone-300 p-5 rounded-md">
                    <ColorSwatch
                        size={48}
                        color="#FEEDEE"
                        withShadow={false}
                    >
                        <IconAssembly color="#FF9F43" />
                    </ColorSwatch>
                    <div className="flex flex-col">
                        <Text size="md" className="font-semibold">{'$307144'}</Text>
                        <Text size="sm">{'Total Purchase Due'}</Text>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center gap-3 border border-solid border-stone-300 p-5 rounded-md">
                    <ColorSwatch
                        size={48}
                        color="#E1F8EE"
                        withShadow={false}
                    >
                        <IconReportMoney color="#38C76F" />
                    </ColorSwatch>
                    <div className="flex flex-col">
                        <Text size="md" className="font-semibold">{'$4385'}</Text>
                        <Text size="sm">{'Total Sales Due'}</Text>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center gap-3 border border-solid border-stone-300 p-5 rounded-md">
                    <ColorSwatch
                        size={48}
                        color="#E2F9FC"
                        withShadow={false}
                    >
                        <IconArrowDown color="#01CFE8" />
                    </ColorSwatch>
                    <div className="flex flex-col">
                        <Text size="md" className="font-semibold">{'$385656.5'}</Text>
                        <Text size="sm">{'Total Sale Amount'}</Text>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center gap-3 border border-solid border-stone-300 p-5 rounded-md">
                    <ColorSwatch
                        size={48}
                        color="#FDEAEB"
                        withShadow={false}
                    >
                        <IconArrowUp color="#EA5455" />
                    </ColorSwatch>
                    <div className="flex flex-col">
                        <Text size="md" className="font-semibold">{'$40000'}</Text>
                        <Text size="sm">{'Total Sale Amount'}</Text>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-between p-5 items-center bg-[#FF9F43] rounded-lg text-[white]">
                    <div className="flex flex-col gap-2">
                        <Title className="font-bold" size="h2">100</Title>
                        <Text size="sm">Customers</Text>
                    </div>
                    <IconUsers size={50} />
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-between p-5 items-center bg-[#01CFE8] rounded-lg text-[white]">
                    <div className="flex flex-col gap-2">
                        <Title className="font-bold" size="h2">100</Title>
                        <Text size="sm">Suppliers</Text>
                    </div>
                    <IconUserStar size={50} />
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-between p-5 items-center bg-[#1B2850] rounded-lg text-[white]">
                    <div className="flex flex-col gap-2">
                        <Title className="font-bold" size="h2">100</Title>
                        <Text size="sm">Purchase Invoice</Text>
                    </div>
                    <IconFileInvoice size={50} />
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-between p-5 items-center bg-[#38C76F] rounded-lg text-[white]">
                    <div className="flex flex-col gap-2">
                        <Title className="font-bold" size="h2">100</Title>
                        <Text size="sm">Sales Invoice</Text>
                    </div>
                    <IconFile size={50} />
                </div>
            </div>
        </div>
    )
})