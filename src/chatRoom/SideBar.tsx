import { Row, Col } from "antd";
import UserInfo from "./UserInfoChat";
import RoomList from "./Roomlist";
export default function SideBar() {
  return (
    <Row>
      <Col span={24}>
        <UserInfo />
      </Col>
      <Col span={24}>
        <RoomList />
      </Col>
    </Row>
  );
}
