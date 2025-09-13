import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const FallingAvatar = () => {

  // const { animation } = useControls({
  //   animation: {
  //     value: "Typing",
  //     options: ["Typing", "Standing", "Falling"]
  //   }
  // });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <group position-y={-1}>
        <Avatar animation="Falling" />
      </group>
      <ambientLight intensity={3}/>
    </>
  );
};