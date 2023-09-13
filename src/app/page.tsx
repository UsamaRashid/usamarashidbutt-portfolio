// import Hero from "@/components/hero";
import HomeGrid from "@/components/HomeGrid";
import WorkComponent from "@/components/Work";
import Nav from "@/components/layouts/nav";
// import What from "@/components/what";

const Home = () => {
  return (
    <>
      <Nav />
      <main className='flex flex-col gap-2 '>
        {/* <Hero />
        <What /> */}
        <HomeGrid />
        <WorkComponent />
      </main>
    </>
  );
};

export default Home;
