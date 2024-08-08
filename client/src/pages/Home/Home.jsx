import React from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="">
      <header className="bg-black fixed min-w-[375px] w-[100vw] z-50">
        <Header />
      </header>
      <main className="">
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
