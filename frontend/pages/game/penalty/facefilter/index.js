import React, { useEffect, useState } from 'react';
import * as deepar from 'deepar';

const PenaltyGame = () => {
    // 상태 변수들 설정
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [permissionDenied, setPermissionDenied] = useState(false); // 권한 거부 상태
    const [arScreenVisible, setArScreenVisible] = useState(false); // AR 화면 표시 상태

    useEffect(() => {
        // 컴포넌트가 마운트될 때 실행되는 함수
        async function initializeDeepAR() {
            try {
                // DeepAR 초기화
                const canvas = document.getElementById('deepar-canvas');
                const dpr = window.devicePixelRatio || 1;
                canvas.width = Math.floor(window.innerWidth * dpr);
                canvas.height = Math.floor(window.innerHeight * dpr);

                // 로딩 프로그레스 바 애니메이션 시작
                const loadingProgressBar = document.getElementById('loading-progress-bar');
                loadingProgressBar.style.width = '100%';

                // DeepAR 효과 파일 경로 정의
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

                let deepAR = null;

                // DeepAR 초기화
                deepAR = await deepar.initialize({
                    licenseKey: '278cc7b9cd550b7b553b0c6b3629c269ea59e76ba24c8393a927b41264da4ff4ca7c1a0d1e640e90',
                    canvas,
                    effect: effectList[0],
                    rootPath: './deepar-resources',
                });

                // 창 크기 조정 시 캔버스 크기 재설정
                const resizeCanvas = () => {
                    const canvas = document.getElementById('deepar-canvas');
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = Math.floor(window.innerWidth * dpr);
                    canvas.height = Math.floor(window.innerHeight * dpr);
                };

                window.addEventListener('resize', resizeCanvas);

                // 로딩 화면 숨기고 AR 화면 표시
                setLoading(false);
                setArScreenVisible(true);
            } catch (error) {
                console.error(error);
                setLoading(false);
                setPermissionDenied(true);
            }
        }

        // DeepAR 초기화 함수 호출
        initializeDeepAR();
    }, []);

    return (
        <div className="penalty-game-container">
            {loading && (
                <div className="loading-screen">
                    <div className="loading-content">
                        <img src="/images/loading-logo.png" alt="Loading" className="loading-logo" />
                        <div className="loading-progress-bar" id="loading-progress-bar"></div>
                        <img src="/images/powered-by.svg" alt="Powered by DeepAR" className="powered-by-logo" />
                    </div>
                </div>
            )}

            {permissionDenied && (
                <div className="permission-denied-screen">
                    <div className="permission-denied-content">
                        <p>Please reload and allow camera access to use this app.</p>
                        <a href="https://www.deepar.ai/projects" target="__blank" className="discover-more-link">
                            Discover more
                        </a>
                    </div>
                </div>
            )}

            {arScreenVisible && (
                <div className="ar-screen">
                    <canvas className="deepar" id="deepar-canvas"></canvas>
                </div>
            )}
        </div>
    );
};

export default PenaltyGame;
