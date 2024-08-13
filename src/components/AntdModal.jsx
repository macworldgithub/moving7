import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const AntdModal = ({ isModalOpen, setIsModalOpen, children }) => {


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title="Authorize Person Name:" className='font-formal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default AntdModal

