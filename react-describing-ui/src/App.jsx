import RootComponent from "./RootComponent";
import { rootGreet } from "./RootModule"

export default function App() {
  rootGreet();

  return (
    <>
      <RootComponent />
    </>
  );
}