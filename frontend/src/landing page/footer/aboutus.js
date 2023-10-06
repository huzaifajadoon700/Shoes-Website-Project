import Footersec from "./Footersec";
import Navbar from "../navbar";

function Aboutus() {
  return (
    <div style={{ fontFamily: "YourChosenFont" }}>
      <Navbar />
      <div
        style={{
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "1.3rem",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontFamily: "YourChosenFont",
          }}
        >
          ABOUT US
        </h1>

        <div
          style={{ textAlign: "center", padding: "10px", fontSize: "1.3rem" }}
        >
          <p style={{ fontFamily: "YourChosenFont", textAlign: "center" }}>
            Everything we do is rooted in sport. Sport plays an increasingly
            important role in more and more people’s lives, on and off the field
            of play. It is central to every culture and society, and is core to
            our health and happiness.
          </p>
        </div>

        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontFamily: "YourChosenFont",
            padding: "10px",
          }}
        >
          KEY FACTS
        </h2>

        <img src="/images/aididas/facts.jpg" />
        <p style={{ fontFamily: "YourChosenFont", textAlign: "center" }}>
          Key to our success are our people and our culture. They bring our
          identity to life, defined by our purpose, mission, and attitude.
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontFamily: "YourChosenFont",
          }}
        >
          OUR PURPOSE
        </h2>
        <p
          style={{
            fontFamily: "YourChosenFont",
            textAlign: "center",
            padding: "30px",
          }}
        >
          Our purpose, ‘Through sport, we have the power to change lives,’
          guides the way we run our company, how we work with our partners, how
          we create our products, and how we engage with our consumers. We will
          always strive to expand the boundaries of human possibility, to
          include and unite people in sport, and to create a more sustainable
          world.{" "}
        </p>

        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontFamily: "YourChosenFont",
            padding: "10px",
          }}
        >
          OUR MISSION
        </h2>
        <img src="/images/aididas/mission.jpg" />
        <p
          style={{
            fontFamily: "YourChosenFont",
            textAlign: "center",
            padding: "30px",
          }}
        >
          Athletes do not settle for average. And neither do we. We have a clear
          mission: To be the best sports brand in the world. Every day, we come
          to work to create and sell the best sports products in the world, and
          to offer the best service and consumer experience – and to do it all
          in a sustainable way. We are the best when we are the credible,
          inclusive, and sustainable leader in our industry.{" "}
        </p>
      </div>
      <Footersec />
    </div>
  );
}
export default Aboutus;
