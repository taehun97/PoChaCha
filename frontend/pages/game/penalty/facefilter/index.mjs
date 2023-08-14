/* 혜지 : 페이스필터 커스텀 진행중 */
import * as deepar from "deepar";
import Carousel from "./carousel.mjs";
//import style from '@/styles/FaceFilter.module.css'


console.log("DEEPAR VERSION : " + deepar.version);

(async function () {

    const effectList = [
        "effects/ray-ban-wayfarer.deepar",
        "effects/viking_helmet.deepar",
        "effects/MakeupLook.deepar",
        "effects/Split_View_Look.deepar",
        "effects/flower_face.deepar",
        "effects/Stallone.deepar",
        "effects/galaxy_background_web.deepar",
        "effects/Humanoid.deepar",
        "effects/Neon_Devil_Horns.deepar",
        "effects/Ping_Pong.deepar",
        "effects/Pixel_Hearts.deepar",
        "effects/Snail.deepar",
        "effects/Hope.deepar",
        "effects/Vendetta_Mask.deepar",
        "effects/Fire_Effect.deepar",
    ];

        const canvas = document.getElementById("deepar-canvas");
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);

        const loadingProgressBar = document.getElementById("loading-progress-bar");
        loadingProgressBar.style.width = "100%";

        let deepAR = null;

        try {
            deepAR = await deepar.initialize({
                licenseKey: "278cc7b9cd550b7b553b0c6b3629c269ea59e76ba24c8393a927b41264da4ff4ca7c1a0d1e640e90",
                canvas,
                effect: effectList[0],
                rootPath: "./deepar-resources",
            });
        } catch (error) {
            console.log(error);
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("permission-denied-screen").style.display = "block";
            return;
        }

    var resizeCanvas = function () {
        const canvas = document.getElementById("deepar-canvas");
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
    };

    window.addEventListener("resize", resizeCanvas);

    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("ar-screen").style.display = "block";

    window.effect = effectList[0];

    const glassesCarousel = new Carousel("carousel");
    glassesCarousel.onChange = async (value) => {
        const loadingSpinner = document.getElementById("loading-spinner");

        if (window.effect !== effectList[value]) {
            loadingSpinner.style.display = "block";
            await deepAR.switchEffect(effectList[value]);
            window.effect = effectList[value];
        }
        loadingSpinner.style.display = "none";
    }
})();
