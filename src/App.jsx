import BtnPrimary, { ButtonSecondary } from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const array = [2, 4, 4, 3];
  function handleClick() {
    alert("Button clicked! ");
  }
  return (
    <>
      <BtnPrimary title="Login" onClick={handleClick}/>
      <BtnPrimary color="bg-green-600" title="Sign up" />
      <ImageComponent
        array={array}
        username="Hello"
        avatar="https://i.pinimg.com/736x/18/f2/71/18f271ce3aaf9f79163847623f45a011.jpg"
      />
      <ImageComponent avatar="https://i.pinimg.com/564x/ae/43/00/ae4300079d04d0d7a3cb3fb8aa63dea4.jpg" />
      <ImageComponent avatar="https://i.pinimg.com/564x/f2/fd/a2/f2fda265d0605d37973610ec76da706f.jpg" />
    </>
  );
}

export default App;
