import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip, Form, Input } from "antd";
import { useContext, useMemo } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppProvider";
import Message from "./message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__description {
      font-size: 12px;
    }
  }
`;
const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const WapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

export default function ChatWindow() {
  const { rooms, selectedRoomId } = useContext(AppContext);

  const selectedRoom = useMemo(
    () => rooms?.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );
  return (
    <WapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">{selectedRoom.name} </p>
          <span className="header__description">
            {selectedRoom?.description}
          </span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />}>Mời</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="test"
            displayName="hoan"
            createAt={"fsdkfj"}
            photoURL={null}
          />
          <Message
            text="test"
            displayName="hoan"
            createAt={"fsdkfj"}
            photoURL={null}
          />
          <Message
            text="test"
            displayName="hoan"
            createAt={"fsdkfj"}
            photoURL={null}
          />
          <Message
            text="test"
            displayName="hoan"
            createAt={"fsdkfj"}
            photoURL={null}
          />
          <Message
            text="test"
            displayName="hoan"
            createAt={"fsdkfj"}
            photoURL={null}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              bordered={false}
              autoComplete="off"
              placeholder="Nhập tin nhắn"
            />
          </Form.Item>
          <Button>Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WapperStyled>
  );
}
