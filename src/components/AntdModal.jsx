import {  Modal } from 'antd';

const AntdModal = ({ handleSubmit, title, isModalOpen, setIsModalOpen, children }) => {


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title={title} className='font-formal' open={isModalOpen} onOk={handleSubmit ? handleSubmit : handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};

export default AntdModal

