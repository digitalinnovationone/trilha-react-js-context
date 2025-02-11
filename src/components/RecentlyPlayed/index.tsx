import { useTheme } from "styled-components";
import Card from "../Shared/Card";
import ChevronLeftIcon from "../Shared/Icons/ChevronRight";
import Item from "../Shared/Item";
import { List } from "./styles";

const recentlyPlayed = [
  {
    id: 234,
    src: "https://cdn2.unrealengine.com/egs-thewitcher3wildhuntcompleteedition-cdprojektred-s1-2560x1440-cfc1c384744d.jpg?resize=1&w=480&h=270&quality=medium",
    name: "The Witcher 3 : Wild Hunt",
    time: "13 hrs 34 min",
  },
  {
    id: 111,
    src: "https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fcolumbine%2Fhome%2F001_DETROIT_CARROUSSELASSET-2580x1451-8f796e28600de97a40b875b9ae46e437c86961ae.jpg",
    name: "Detroit: Become Human",
    time: "2 hrs 26 min",
  },
  {
    id: 387,
    src: "https://cdn2.unrealengine.com/01-en-fn33-00-c1s1-og-3840x2160-3840x2160-bfcccf4ccda3.jpg",
    name: "Fortnite: Raiz",
    time: "3 hrs 34 min",
  },
];

const RecentlyPlayed = () => {
  const theme = useTheme();

  return (
    <>
      <h2>Recently Played</h2>
      <List>
        {recentlyPlayed.map(({ id, src, name, time }) => (
          <Card key={id}>
            <Item
              imageSrc={src}
              text={name}
              caption={time}
              action={<ChevronLeftIcon stroke={theme.colors.contrast} />}
            />
          </Card>
        ))}
      </List>
    </>
  );
};

export default RecentlyPlayed;
