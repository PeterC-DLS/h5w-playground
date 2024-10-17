import { useVisCanvasContext } from "@h5web/lib";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3, Mesh } from "three";

type AtMostThree<T> = readonly [T?, T?, T?];
interface InvariantBoxProps {
    /** width, height, depth */
    size: AtMostThree<number>;
    /** color of box */
    color?: string;
}

/**
 * A box that stays the same size independent of zoom
 * @returns an invariant box
 */
export function InvariantBox(props: InvariantBoxProps) {
    const {size, color="green"} = props;
    const {htmlToWorld} = useVisCanvasContext();
    const {camera} = useThree();
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current !== null) {
            const cs = htmlToWorld(camera, new Vector3(1, -1, 0)).sub(htmlToWorld(camera, new Vector3(0, 0, 0)));
            meshRef.current.scale.set(cs.x, cs.y, 1);
            console.log("Frame:", meshRef.current.scale);
        }
    });
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[...size]}/>
            <meshBasicMaterial color={color}/>
        </mesh>
    );
}