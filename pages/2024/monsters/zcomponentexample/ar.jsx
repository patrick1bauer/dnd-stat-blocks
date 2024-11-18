import AugmentedReality from "@/components/AugmentedReality.jsx";

export default function AR() {
    // Define the paths to the 3D model and marker image
    const modelPath = "/2024/monsters/Pseudodragon/scene.gltf";
    const markerImagePath = "/2024/monsters/Pseudodragon/Pseudodragon.png";

    return (
        <div>
            <AugmentedReality modelPath={modelPath} markerImagePath={markerImagePath}/>
        </div>
    );
}