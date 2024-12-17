import { Modal } from "antd";

const AntdModal = ({
  handleSubmit,
  title,
  isModalOpen,
  setIsModalOpen,
  children,
  classes,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={title}
        className={`${classes}  font-formal`}
        style={{ width: "100px" }}
        open={isModalOpen}
        onOk={handleSubmit ? handleSubmit : handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default AntdModal;
