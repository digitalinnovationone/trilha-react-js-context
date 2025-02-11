import Image from "../Shared/Image";
import { List } from "./styles";

const games = [
  {
    id: 874,
    name: "Ghost of Tsushima",
    src: "https://cdn1.epicgames.com/offer/6e6aa039c73347b885803de65ac5d3db/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39?resize=1&w=360&h=480&quality=medium",
  },
  {
    id: 125,
    name: "Assassin's Creed Odyssey",
    src: "https://cdn1.epicgames.com/offer/clary/ACOdyssey_STD_Store_Portrait_1200x1600_1200x1600-3add642bad2d1207487527d53d715220?resize=1&w=360&h=480&quality=medium",
  },
  {
    id: 987,
    name: "Genshin Impact",
    src: "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc?resize=1&w=360&h=480&quality=medium",
  },
  {
    id: 111,
    name: "HITMAN World of Assassination",
    src: "https://cdn1.epicgames.com/offer/ed55aa5edc5941de92fd7f64de415793/EGS_HITMANWorldofAssassination_IOInteractiveAS_Bundles_S2_1200x1600-1f5eb0ca3e8855875b9f0757748337b4?resize=1&w=360&h=480&quality=medium",
  },
  {
    id: 432,
    name: "GTA V",
    src: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?resize=1&w=360&h=480&quality=medium",
  },

  {
    id: 984,
    name: "Technotopia",
    src: "https://cdn1.epicgames.com/spt-assets/1e8ab2106a954169a4894117fae7ea2c/technotopia-101x5.png?resize=1&w=360&h=480&quality=medium",
  },
  {
    id: 180,
    name: "The Last of Us™ Part II Remastered",
    src: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480&quality=medium",
  },
  {
    id: 344,
    name: "Assassin’s Creed Shadows",
    src: "https://cdn1.epicgames.com/offer/14a28903e3d14bd5aa3e6dbf10868126/EN_EGST_StorePortrait_1200x1600_1200x1600-a010fb65414cbbc48e055d1f6eac41b8?resize=1&w=360&h=480&quality=medium",
  },
];

const Library = () => {
  return (
    <>
      <h2>Game Library</h2>
      <List>
        {games.map(({ id, name, src }) => (
          <Image
            key={id}
            src={src}
            alt={name}
            width={195}
            height={260}
            style={{ cursor: "pointer" }}
          />
        ))}
      </List>
    </>
  );
};

export default Library;
