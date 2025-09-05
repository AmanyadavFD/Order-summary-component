import Card from "./components/Card";
import Layout from "./layout/Layout";
import "./tokens.css";

const cardData = {
  image: "./images/illustration-hero.svg",
  heading: "Order Summary",
  description:
    "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
  annualData: {
    icon: "./images/icon-music.svg",
    subHeading: "Annual Plan",
    price: 59.99,
    chnage: "chnage",
  },
};

function App() {
  return (
    <>
      <Layout>
        <Card data={cardData} />
      </Layout>
    </>
  );
}

export default App;
