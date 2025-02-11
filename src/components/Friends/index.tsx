import Button from "../Shared/Button";
import Card from "../Shared/Card";
import Item from "../Shared/Item";

import FriendImage01 from "../../assets/images/mock/friend-01.png";
import FriendImage02 from "../../assets/images/mock/friend-02.png";
import FriendImage03 from "../../assets/images/mock/friend-03.png";
import FriendImage04 from "../../assets/images/mock/friend-04.png";
import { ItemContainer } from "./styles";

const friends = [
  {
    id: 1,
    avatar: FriendImage01,
    name: "Shawn Garcia",
    status: "Online",
  },
  {
    id: 2,
    avatar: FriendImage02,
    name: "Jenny Wish",
    status: "Online",
  },
  {
    id: 3,
    avatar: FriendImage03,
    name: "Daniel Gallego",
    status: "Online",
  },
  {
    id: 4,
    avatar: FriendImage04,
    name: "Julia Morgan",
    status: "Offline",
  },
];

const Friends = () => {
  return (
    <>
      <h2>Friends List</h2>
      <Card>
        {friends.map(({ id, avatar, name, status }) => (
          <ItemContainer key={id}>
            <Item
              imageSrc={avatar}
              text={name}
              caption={status}
              action={<Button>Chat</Button>}
            />
          </ItemContainer>
        ))}
      </Card>
    </>
  );
};

export default Friends;
