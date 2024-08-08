import { useQuery, gql } from "@apollo/client";
import room6 from "../Assets/Addons/rooms/room6.jpeg";
import room8 from "../Assets/Addons/rooms/room8.jpeg";
import room5 from "../Assets/Addons/rooms/room5.jpeg";
import VineLeft from "../Assets/Addons/decoration/vine_left";
const GET_RESOURCES = gql`
  query Resources {
    resources {
      id
      name
    }
  }
`;
const Resources = () => {
  // const { data, loading, error } = useQuery(GET_RESOURCES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Not loaded</p>;
  return (
    <>
      {/* <section className="resource">
        {data.resources.map((resource) => (
          <div className="resource_item" key={resource.id}>
            {resource.name}
            <button className="btn_resource_reserve">Reserve</button>
          </div>
        ))}
      </section> */}
      <main className="room_main">
        <aside className="room_filters">Aside menu</aside>
        <section className="resource">
          <article className="resource_item">
            <VineLeft></VineLeft>
            <img src={room5} alt="room5" />
            <p>
              This room combines soft pink and beige bedding with an array of framed artwork on the walls. A wooden desk
              by the window hosts a variety of potted plants, adding a touch of greenery. The fairy lights and a mix of
              modern and botanical prints add to the room's warm and welcoming feel
            </p>
            <button>Reserve</button>
          </article>
          <article className="resource_item">
            <VineLeft></VineLeft>
            <img src={room5} alt="room5" />
            <p>
              This room combines soft pink and beige bedding with an array of framed artwork on the walls. A wooden desk
              by the window hosts a variety of potted plants, adding a touch of greenery. The fairy lights and a mix of
              modern and botanical prints add to the room's warm and welcoming feel
            </p>
            <button>Reserve</button>
          </article>
          <article className="resource_item">
            <VineLeft></VineLeft>
            <img src={room5} alt="room5" />
            <p>
              This room combines soft pink and beige bedding with an array of framed artwork on the walls. A wooden desk
              by the window hosts a variety of potted plants, adding a touch of greenery. The fairy lights and a mix of
              modern and botanical prints add to the room's warm and welcoming feel
            </p>
            <button>Reserve</button>
          </article>
        </section>
      </main>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
      <section className="test"></section>
    </>
  );
};

export default Resources;
