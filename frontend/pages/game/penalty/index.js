import * as deepar from "deepar";
import React, {useRef} from 'react';

const deepAR = await deepar.initialize({
    licenseKey: "278cc7b9cd550b7b553b0c6b3629c269ea59e76ba24c8393a927b41264da4ff4ca7c1a0d1e640e90",
    canvas: deepar-canvas.current,//deepar-canvas ref={deepar-canvas}로 변경
    effect: "https://cdn.jsdelivr.net/npm/deepar/effects/aviators",
  });

export default function PenaltyPage(){



    return (
        <div>
            {/* loading screen */}
            <div class="fixed-fullscreen" id="loading-screen">
                <div
                    style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
                >
                    <img
                        id="initial-loading-logo"
                        style="max-width: 200px"
                        src="/images/crystal.png"
                        class="animate-bounce"
                    />
                    <div
                        style="
            width: 100%;
            height: 8px;
            margin-top: 20px;
            background-color: rgb(55 65 81 / 1);
            border-radius: 100px;
            overflow: hidden;
          "
                    >
                        <div id="loading-progress-bar"></div>
                    </div>
                    <img
                        id="initial-loading-text"
                        style="max-width: 140px; margin-top: 30px"
                        src="/images/powered-by.svg"
                    />
                </div>
            </div>

            {/* permission denied screen */}
            <div
                class="fixed-fullscreen screen"
                id="permission-denied-screen"
                style="display: none"
            >
                <div class="permission-denied-text-container">
                    <div class="permission-denied-text" id="camera_denied">
                        <p>Please reload and allow camera access to use this app.</p>
                        <a
                            class="permission-denied-button"
                            href="https://www.deepar.ai/projects"
                            target="__blank"
                        >
                            Discover more
                        </a>
                    </div>
                </div>
            </div>

            {/* AR screen */}
            <div id="ar-screen" style="display: none">
                <canvas class="deepar" id="deepar-canvas"></canvas>

                <div class="carousel" id="carousel">
                    <div class="carousel-center" id="carousel-center">
                        <div class="lds-ring" id="loading-spinner" style="display: none">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="carousel-slider">
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/ray-ban-wayfarer.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/viking.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/makeup.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/makeup-split.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/flower_face.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/stallone.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/galaxy.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/humanoid.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/devil_horns.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/ping_pong.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/pixel_hearts.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/snail.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/hope.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/vendetta.png" />
                        </div>
                        <div class="slide">
                            <img class="responsive-img" src="thumbs/fire.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}