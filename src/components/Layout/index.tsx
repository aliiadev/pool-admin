import { NavbarSectionType, navbarSections } from '@configs/NavbarSection';
import { AppShell, Burger, NavLink, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Outlet, NavLink as RNavLink } from 'react-router-dom';
import UserSetting from './UserSetting';


const Layout = () => {

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    const navLinkRender = (navbar: NavbarSectionType[]) => {
        return (
            navbar.map(({ pageUrl, icon, label, children }) => (
                <RNavLink
                    key={pageUrl}
                    to={pageUrl}
                    style={{ all: 'unset' }}
                >
                    {({ isActive }) => (
                        <NavLink
                            active={isActive}
                            leftSection={icon}
                            label={label}
                            variant="filled"
                            className='rounded-md'
                            childrenOffset={children && 36}
                        >
                            {children && navLinkRender(children)}
                        </NavLink>
                    )}
                </RNavLink>
            ))
        )
    }

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 259,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <div className='flex w-full flex-row items-center h-full px-3 gap-3'>
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                    <MantineLogo size={30} />
                    <div className='w-full flex justify-end'>
                        <UserSetting />
                    </div>
                </div>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <AppShell.Section grow my="md" component={ScrollArea}>
                    {navLinkRender(navbarSections)}
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}

export default Layout;