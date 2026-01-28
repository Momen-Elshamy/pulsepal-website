import { useEffect, useRef } from 'react';

export default function FlightPath() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '20px' }}>
            <svg width="100%" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* Dashed Path */}
                <path 
                    d="M10 10 Q 150 60 290 10" 
                    stroke="rgba(255,255,255,0.15)" 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                    fill="none"
                />
                
                {/* Moving Dot */}
                <circle r="3" fill="#fff" filter="url(#glow)">
                    <animateMotion 
                        dur="4s" 
                        repeatCount="indefinite"
                        path="M10 10 Q 150 60 290 10"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1"
                        keyTimes="0;1"
                    />
                    <animate 
                        attributeName="opacity" 
                        values="0;1;1;0" 
                        keyTimes="0;0.1;0.9;1" 
                        dur="4s" 
                        repeatCount="indefinite" 
                    />
                </circle>

                {/* Glow Filter */}
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
