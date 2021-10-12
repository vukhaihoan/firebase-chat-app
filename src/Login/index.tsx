import { Button, Col, Row, Typography } from "antd";
import React from "react";
import firebase, { auth } from "../firebase/config";

const fbProvider = new firebase.auth.FacebookAuthProvider();

const { Title } = Typography;
export default function Login() {
  function handleFblogin() {
    auth.signInWithPopup(fbProvider);
  }

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFblogin}>
            Đăng nhập bằng FaceBook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
