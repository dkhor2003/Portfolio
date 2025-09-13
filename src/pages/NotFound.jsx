import { Canvas } from "@react-three/fiber";
import { FallingAvatar } from "@/components/FallingAvatar";

// export const NotFound = () => {
//     return <div> Not Found </div>;
// };

export const NotFound = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h3 className="text-center font-mono font-bold my-6 space-y-2">
                <div className="text-5xl md:text-6xl text-red-600 drop-shadow-lg animate-pulse">
                    404
                </div>
                <div className="text-xl md:text-2xl text-gray-700 tracking-widest uppercase">
                    Page Not Found
                </div>
                <div className="text-base md:text-lg italic text-gray-500">
                    You seemed to <span className="text-indigo-600 font-semibold">fall</span> into some trap...
                </div>
            </h3>
            <Canvas
                shadows
                camera={{ position: [0, 2, 7], fov: 30 }}
                className="w-full h-[70%]"
            >
                <color attach="background" args={["#ececec"]} />
                <FallingAvatar />
            </Canvas>
        </div>
    );
};
