import { Row, Col } from "antd";
import UserInfo from "./UserInfoChat";
import RoomList from "./Roomlist";
import styled from "styled-components";

const SideBarStyled = styled.div`
  background: #3f0e40;
  color: white;
  height: 100vh;
`;
export default function SideBar() {
  return (
    <SideBarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SideBarStyled>
  );
}
