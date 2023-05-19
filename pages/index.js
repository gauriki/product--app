import { Benifit } from "./component/benifits";
import { Feature } from "./component/feature";
import { Footer } from "./component/footer";
import { Header } from "./component/header";
import { Plan } from "./component/plan";
import { Primary } from "./component/primary";
import { Product } from "./component/product";
import { Start } from "./component/start";
import { User } from "./component/user";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Product />
      <Feature />
      <Benifit />
      <Primary />
      <User />
      <Plan />
      <Start />
      <Footer />
    </div>
  );
}
