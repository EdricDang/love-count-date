import Banner from "@/components/banner/Banner";
import PlayMusic from "@/components/bases/PlayMusic";
import Couple from "@/components/sections/Couple";

export default function Home() {
  return (
    <main>
      <PlayMusic />
      <Banner />
      <Couple />
    </main>
  );
}
