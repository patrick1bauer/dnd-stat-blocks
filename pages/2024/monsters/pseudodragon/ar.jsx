export default function Test() {
    return (
      <>
        <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
  
        {/* <div class="arjs-loader">
          <div>Loading, please wait...</div>
        </div> */}
        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'
        >
          {/* Picture to recognize */}
          <a-nft
            type='nft'
            url='/2024/monsters/Pseudodragon/Pseudodragon'
            smooth='true'
            smoothCount='10'
            smoothTolerance='0.01'
            smoothThreshold='5'
          >
            {/* Model to display */}
            <a-entity
              gltf-model='/2024/monsters/Pseudodragon/scene.gltf'
              scale="5 5 5"
              position="100 100 0"
            >
            </a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </>
    );
  }
  