import "./app.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Dndex from "./components/Home/Dndex";


const Container = styled.div`
  height: 100vh;
  margin:0;
  padding:0;
  width: 100%;
  background-color:#01040c;
`;

function App() {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <Dndex/>
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default App;
