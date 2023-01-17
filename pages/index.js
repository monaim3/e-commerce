
import Advertise from "../Component/Advertise";
import Banner from "../Component/Banner";
import Blog from "../Component/blog";
import FeaturePd from "../Component/FeaturePd";
import Welcome from "../Component/Welcome";

export default function Home() {

  return (
    <>
      <Banner></Banner>
     <Advertise></Advertise>
     <FeaturePd></FeaturePd>
    <Welcome></Welcome>
    <Blog></Blog>
    </>
  );
}
