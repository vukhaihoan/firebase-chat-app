import React from "react";
import SideBar from "./SideBar";
import ChatWindow from "./ChatWindow";
import { Row, Col } from "antd";

export default function ChatRoom() {
  return (
    <Row>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={8}>
        <ChatWindow />
      </Col>
    </Row>
  );
}
