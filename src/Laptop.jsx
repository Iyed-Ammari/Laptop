import {
  Html,
  Environment,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

export default function Laptop() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls
        global
        polar={[-0.4, 0, 0.2]}
        azimuth={[-0.4, 0, 0.2]}
      >
        <primitive object={laptop.scene} position={[0, -1, 0]}>
          <Html
            wrapperClass="laptop"
            position={[0, 1.5, -1.5]}
            transform
            rotation-x={-0.25}
                      distanceFactor={3.96}
                      
          >
            <iframe src="https://matias.me/nsfw/" frameborder="0"></iframe>
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
}
