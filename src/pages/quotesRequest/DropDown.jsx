import React from 'react';
import { DownOutlined, UserOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';


const QuoteDropdown = ({setUser}) => {
    const navigate = useNavigate()
    const items = [
        {
            label: (<p onClick={() => {
                localStorage.removeItem('userData')
                setUser({})
                navigate('/')
            }} className='px-3 py-1 text-red-500'>Logout</p>),
            key: '1'
        }
    ];
    const menuProps = {
        items,
    };
    return (
        <Space wrap>
            <Dropdown menu={menuProps}>
                <Button size='small' className='border-0'>
                    <DownOutlined />
                </Button>
            </Dropdown>
        </Space>

    )
};
export default QuoteDropdown;
