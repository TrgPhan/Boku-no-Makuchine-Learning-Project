'use client';
import { useEffect, useRef, useState } from 'react';

const WebcamFeed = () => {
    const videoRef = useRef(null);
    const [cameraError, setCameraError] = useState(null);

    useEffect(() => {
        let stream;

        const startCamera = async () => {
            try {
                const constraints = {
                    video: {
                        facingMode: 'environment',
                        width: { ideal: 1280 },
                        height: { ideal: 720 }
                    }
                };

                stream = await navigator.mediaDevices.getUserMedia(constraints);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (err) {
                setCameraError('Không thể truy cập webcam. Vui lòng cho phép quyền truy cập camera!');
                console.error('Lỗi camera:', err);
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-video">
            {cameraError ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                    {cameraError}
                </div>
            ) : (
                <video
                    ref={videoRef}
                    className="rounded-lg shadow-lg bg-gray-100 w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted
                />
            )}
        </div>
    );
};

export default WebcamFeed;