'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function PlaygroundPage() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Ensure Three.js and GSAP are loaded before running the script
    if (window.THREE && window.gsap && canvasContainerRef.current && !initialized.current) {
        initialized.current = true; // Mark as initialized to prevent re-running

        const container = canvasContainerRef.current;
        const scene = new window.THREE.Scene();
        const camera = new window.THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Clear previous canvas if any
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(renderer.domElement);

        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec2 uMouse;
            varying vec2 vUv;

            float random(vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            float noise(vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);
                float a = random(i);
                float b = random(i + vec2(1.0, 0.0));
                float c = random(i + vec2(0.0, 1.0));
                float d = random(i + vec2(1.0, 1.0));
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }

            void main() {
                vec2 st = gl_FragCoord.xy / uResolution.xy;
                float movement = noise(st * 3.0 + uTime * 0.2);
                vec3 colorBg = vec3(0.02, 0.02, 0.05);
                vec3 colorAccent = vec3(0.949, 0.545, 0.173);
                float dist = distance(st, uMouse);
                float glow = 1.0 - smoothstep(0.0, 0.4, dist);
                float wave = sin(st.x * 10.0 + uTime) * cos(st.y * 10.0 + uTime) * 0.05;
                float noiseVal = random(st * uTime);
                float brightness = movement + glow * 0.5 + wave;
                float dither = step(0.5, brightness + (noiseVal * 0.2 - 0.1));
                vec3 finalColor = mix(colorBg, colorAccent * 0.4, dither * 0.3);
                finalColor += (random(st * 100.0) - 0.5) * 0.05;
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new window.THREE.Vector2(window.innerWidth, window.innerHeight) },
            uMouse: { value: new window.THREE.Vector2(0.5, 0.5) }
        };

        const geometry = new window.THREE.PlaneGeometry(2, 2);
        const material = new window.THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms
        });

        const mesh = new window.THREE.Mesh(geometry, material);
        scene.add(mesh);

        const clock = new window.THREE.Clock();

        let animationFrameId: number;
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        }
        animate();

        const handleMouseMove = (e: MouseEvent) => {
            uniforms.uMouse.value.x = e.clientX / window.innerWidth;
            uniforms.uMouse.value.y = 1.0 - (e.clientY / window.innerHeight);

            window.gsap.to('#cursor', {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };
        document.addEventListener('mousemove', handleMouseMove);

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.uResolution.value.x = window.innerWidth;
            uniforms.uResolution.value.y = window.innerHeight;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        const tl = window.gsap.timeline();
        tl.to(container, { duration: 1.5, opacity: 1 });
        tl.to('header.playground-header', { duration: 1, opacity: 1, y: 0, ease: "power3.out" }, "-=1");
        tl.to('.hero h1 span', { y: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 }, "-=0.5");
        tl.to('.hero p', { duration: 1, opacity: 1, y: 0 }, "-=0.8");
        tl.to('.cta-group', { duration: 1, opacity: 1, y: 0, ease: "back.out(1.7)" }, "-=0.6");
        
        return () => {
            // Cleanup on component unmount
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

        .playground-body {
            --primary-orange: #F28B2F;
            --text-white: #ffffff;
            --text-gray: #a1a1aa;
            --bg-black: #050505;
            background-color: var(--bg-black) !important;
            font-family: 'Inter', sans-serif;
            color: var(--text-white);
            overflow: hidden !important;
            height: 100vh;
        }

        #canvas-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            opacity: 0;
        }

        .ui-layer {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            padding: 0 5%;
        }

        .playground-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 0;
            opacity: 0;
            transform: translateY(-20px);
        }

        .logo {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 1.2rem;
            gap: 10px;
        }

        .logo span { color: var(--primary-orange); }

        .playground-nav ul {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .playground-nav a {
            text-decoration: none;
            color: var(--text-gray);
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .playground-nav a:hover { color: var(--primary-orange); }

        .controls { display: flex; gap: 1rem; align-items: center; }

        .hero {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero h1 {
            font-size: 5rem;
            font-weight: 700;
            color: var(--primary-orange);
            letter-spacing: -2px;
            line-height: 1.1;
            margin-bottom: 1rem;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .hero h1 span {
            display: inline-block;
            transform: translateY(100%);
        }

        .hero p {
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 3rem;
            font-weight: 300;
            opacity: 0;
        }

        .cta-group {
            display: flex;
            gap: 1.5rem;
            opacity: 0;
            transform: translateY(20px);
        }

        .btn {
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid transparent;
        }

        .btn-primary {
            background-color: var(--primary-orange);
            color: #000;
            box-shadow: 0 0 20px rgba(242, 139, 47, 0.2);
        }

        .btn-primary:hover {
            background-color: #fff;
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
        }

        .btn-outline {
            border-color: #333;
            color: #fff;
            background: rgba(0,0,0,0.3);
            backdrop-filter: blur(5px);
        }

        .btn-outline:hover {
            border-color: var(--text-white);
            background: rgba(255,255,255,0.1);
        }

        .cursor-dot {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(242, 139, 47, 0.15) 0%, rgba(0,0,0,0) 70%);
            position: fixed;
            top: 0; left: 0;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 5;
            mix-blend-mode: screen;
        }

        @media (max-width: 768px) {
            .hero h1 { font-size: 3rem; }
            .playground-nav { display: none; }
        }
      `}</style>
      <div className="playground-body">
        <div id="canvas-container" ref={canvasContainerRef}></div>
        <div className="cursor-dot" id="cursor"></div>

        <div className="ui-layer">
            <header className="playground-header">
                <div className="logo">
                    <span>R</span> Ricardo Quadros
                </div>
                <nav className="playground-nav">
                    <ul>
                        <li><a href="#">Sobre Mim</a></li>
                        <li><a href="#">Formação</a></li>
                        <li><a href="#">Experiência</a></li>
                        <li><a href="#">Competências</a></li>
                        <li><a href="#">Projetos</a></li>
                    </ul>
                </nav>
                <div className="controls">
                    <span style={{ cursor: 'pointer' }}>☀</span>
                    <span style={{ fontWeight: 'bold' }}>EN</span>
                </div>
            </header>

            <section className="hero">
                <h1 id="hero-title">
                    <div className="line"><span>Ricardo</span></div>
                    <div className="line"><span>Quadros</span></div>
                </h1>
                <p>Estudante de Engenharia da Computação | Futuro Profissional de TI</p>
                
                <div className="cta-group">
                    <a href="#" className="btn btn-primary">Sobre Mim ➔</a>
                    <a href="#" className="btn btn-outline">Contato</a>
                </div>
            </section>
        </div>
      </div>
    </>
  );
}