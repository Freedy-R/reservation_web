import room6 from "../Assets/Addons/rooms/room6.jpeg";
import room8 from "../Assets/Addons/rooms/room8.jpeg";
import room5 from "../Assets/Addons/rooms/room5.jpeg";
import hotel from "../Assets/Addons/rooms/hotel.jpeg";
const Home = () => {
  return (
    <>
      <main>
        <section className="gallery_section">
          <picture className="gallery">
            <img className="room" alt="room5" src={room5} />
            <img className="room active" alt="room6" src={room6} />
            <img className="room" alt="room8" src={room8} />
          </picture>
        </section>
        <section className="welcome_section">
          <h1>Welcome to our Hotel!</h1>
          <p>
            We are delighted to welcome you to our serene sanctuary nestled in the heart of nature. Forest Retreat Hotel
            is surrounded by lush forests and vibrant wildlife, offering a unique escape from city life. Many years ago,
            a naturalist named Evelyn discovered this enchanting forest and envisioned a place where guests could
            reconnect with nature. Inspired by her vision, our hotel was crafted to blend seamlessly with its
            surroundings. Each element, from eco-friendly architecture to locally sourced cuisine, reflects our
            commitment to preserving the environment. As you settle in, explore the trails, listen to the birds, and
            immerse yourself in the forest's calming embrace. Whether you're here for relaxation, adventure, or to
            recharge, we're here to make your stay magical.
          </p>
          <div>
            <p>Welcome to your forest haven</p>
            <p>Warm regards,</p>
          </div>
          <b> The Forest Retreat Hotel Team </b>
        </section>
        <section className="hotel_section">
          <picture>
            <img src={hotel} alt="hotel" />
          </picture>
          <picture>
            <img src={hotel} alt="hotel" />
          </picture>
          <picture>
            <img src={hotel} alt="hotel" />
          </picture>
        </section>
      </main>
    </>
  );
};

export default Home;
