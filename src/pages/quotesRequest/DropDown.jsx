import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';
// const handleButtonClick = (e) => {
//     message.info('Click on left button.');
//     console.log('click left button', e);
// };
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
        danger: true,
    },
    {
        label: '4rd menu item',
        key: '4',
        icon: <UserOutlined />,
        danger: true,
        disabled: true,
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};
const QuoteDropdown = () => (
    <Space wrap>
        <Dropdown menu={menuProps}>
            <Button size='large'>
                <Space styles={{ item: { width: 55, } }}>
                    Show All
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    </Space>

);
export default QuoteDropdown;