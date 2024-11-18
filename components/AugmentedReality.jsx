import styles from "@/styles/ar.module.css";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function AugmentedReality({ modelPath, markerImagePath }) {
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {

        // Import A Frame
        await loadScript("https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js");

        // Import AR.JS
        await loadScript("https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js");
        setScriptLoaded(true);
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();
  }, []);

  if (!isScriptLoaded) {
    return (
      <div className={styles.arjsLoader}>
        <div>Loading AR experience...</div>
      </div>
    );
  }

  return (
    <>
      <script src="/src/aframe.min.js"></script>
      <script src="/src/aframe-ar.js"></script>
      <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;" xr-mode-ui="enabled: false" vr-mode-ui="enabled: false">
        {/* Preload the model asset */}
        {/* <a-assets>
          <a-asset-item id="model" src={modelPath}></a-asset-item>
          </a-assets> */}

        {/* Custom marker image */}
        {/* <a-marker preset="custom" url={markerImagePath}>
          <a-entity
          gltf-model="#model"
          scale="0.5 0.5 0.5"
          position="0 0 0"
          rotation="0 0 0"
          ></a-entity>
          </a-marker> */}

        {/* Hiro marker */}
        <a-marker preset="hiro">
          <a-box position="0 1 0" scale="1 1 1" material="opacity: 1; color: red;"></a-box>
        </a-marker>

        {/* Hiro marker image nft */}


        {/* Camera */}
        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}

// export default function AugmentedReality() {
  //     const [isScriptLoaded, setScriptLoaded] = useState(false);
  
  //     useEffect(() => {
    //       const loadScript = (src) => {
      //         return new Promise((resolve, reject) => {
//           const script = document.createElement("script");
//           script.src = src;
//           script.async = true;
//           script.onload = resolve;
//           script.onerror = reject;
//           document.head.appendChild(script);
//         });
//       };

//       const loadScripts = async () => {
//         try {
//           await loadScript("https://aframe.io/releases/1.2.0/aframe.min.js");
//           await loadScript("https://cdn.rawgit.com/jeromeetienne/AR.js/2.2.2/aframe/build/aframe-ar.js");
//           setScriptLoaded(true);
//         } catch (error) {
//           console.error("Error loading scripts:", error);
//         }
//       };

//       loadScripts();
//     }, []);

//     if (!isScriptLoaded) {
//       return (
//         <div className={styles.arjsLoader}>
//           <div>Loading AR experience...</div>
//         </div>
//       );
//     }

//     return (
//       <div className={styles.arDiv}>
//         <a-scene className={styles.aScene} embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;" xr-mode-ui="enabled: false" vr-mode-ui="enabled: false">
//           <a-marker preset="hiro">
//             <a-box position="0 1 0" scale="1 1 1" material="opacity: 1; color: green;"></a-box>
//           </a-marker>
//           <a-entity camera></a-entity>
//         </a-scene>
//       </div>
//     );
// }
