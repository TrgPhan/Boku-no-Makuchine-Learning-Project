'use client';
import { useEffect, useRef, useState } from 'react';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

const WebcamFeed = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [cameraError, setCameraError] = useState(null);
    const handsRef = useRef(null);

    useEffect(() => {
        const hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        hands.onResults((results) => {
            const canvas = canvasRef.current;
            const video = videoRef.current;

            if (canvas && video) {
                const ctx = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                ctx.save();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

                if (results.multiHandLandmarks) {
                    for (const landmarks of results.multiHandLandmarks) {
                        drawConnectors(ctx, landmarks, HAND_CONNECTIONS,
                            { color: '#00FF00', lineWidth: 2 });
                        drawLandmarks(ctx, landmarks,
                            { color: '#FF0000', lineWidth: 1, radius: 2 });
                    }
                }
                ctx.restore();
            }
        });

        handsRef.current = hands;

        const camera = new Camera(videoRef.current, {
            onFrame: async () => {
                if (videoRef.current) {
                    await hands.send({ image: videoRef.current });
                }
            },
            width: 1280,
            height: 720
        });

        camera.start()
            .catch(err => {
                setCameraError('Không thể truy cập webcam. Vui lòng cho phép quyền truy cập camera!');
                console.error('Lỗi camera:', err);
            });

        return () => {
            if (camera) camera.stop();
            if (hands) hands.close();
        };
    }, []);

    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-video">
            {cameraError ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                    {cameraError}
                </div>
            ) : (
                <>
                    <video
                        ref={videoRef}
                        className="rounded-lg shadow-lg bg-black w-full h-full object-cover"
                        autoPlay
                        playsInline
                        muted
                    />
                    <canvas
                        ref={canvasRef}
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    />
                </>
            )}
        </div>
    );
};

export default WebcamFeed;