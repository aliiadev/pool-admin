import { Menu, Text, rem, Avatar } from '@mantine/core';
import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
} from '@tabler/icons-react';


const UserSetting = () => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Avatar className='cursor-pointer' color="cyan" radius="xl">A</Avatar>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                    Settings
                </Menu.Item>
                <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                    Gallery
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
                    rightSection={
                        <Text size="xs" c="dimmed">
                            ⌘K
                        </Text>
                    }
                >
                    Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                    leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                >
                    Transfer my data
                </Menu.Item>
                <Menu.Item
                    color="red"
                    leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default UserSetting;