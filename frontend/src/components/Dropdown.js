import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import './css/Dropdown.css'
import { UseHook } from '../hook/usehook';

const Dropdown_Components = ({ setOpenModal }) => {
    const { isLogIn , LogOut, avatar, setPageNum } = UseHook();
    
    const onClick = ({ key }) => {
        switch(key) {
            case '1': 
                setPageNum(0);
                break;
            case '2': 
                setOpenModal(1);
                break;
            case '3': 
                setOpenModal(2);
                break;
            case '4': 
                LogOut(); 
                setPageNum(1);
                break;
            default:
                break;
        }
    };
    
    const items = [
        {
            key: '1',
            label: 'Your Profile',
            disabled: (!isLogIn)
        },
        {
            key: '2',
            label: 'Log in',
            disabled: (isLogIn)
        },
        {
            key: '3',
            label: 'Sign up',
            disabled: (isLogIn)
        },
        {
            key: '4',
            danger: true,
            label: 'Log out',
            disabled: (!isLogIn)
        }
    ];

    return(
        <Dropdown
            menu={{
                items,
                onClick
            }}
            trigger={['click']}
            id="dropdown"
        >
            <span onClick={(e) => e.preventDefault()}>
                <Space>
                    {isLogIn ? <Avatar src={avatar}/> :  <b>Account</b>}
                    <DownOutlined />
                </Space>
            </span>
        </Dropdown>
    )
}

export default Dropdown_Components;