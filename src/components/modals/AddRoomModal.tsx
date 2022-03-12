import { Form, Input, Modal } from "antd";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { AuthContext } from "../../context/AuthProvider";
import { addDocument } from "../../firebase/service";

export default function AddRoomModal() {
  const { isAddRoomvisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  function handleOk() {
    console.log({ formData: form.getFieldsValue() });
    let roomData = {
      ...form.getFieldsValue(),
      members: [uid],
    };
    addDocument("rooms", roomData);
    form.resetFields();
    setIsAddRoomVisible!(false);
  }
  function handleCancel() {
    form.resetFields();
    setIsAddRoomVisible!(true);
  }
  return (
    <div>
      <Modal
        title="Tạo Phòng"
        visible={isAddRoomvisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên Phòng" name="name">
            <Input placeholder="nhập tên phòng"></Input>
          </Form.Item>
          <Form.Item label="Mô Tả" name="description">
            <Input.TextArea placeholder="nhập mô tả"></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
