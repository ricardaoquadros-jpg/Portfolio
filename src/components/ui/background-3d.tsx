"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

// --- Simplex Noise Implementation (Compact) ---
class SimplexNoise {
    private p: Uint8Array;
    private perm: Uint8Array;
    private permMod12: Uint8Array;
    private grad3: Float32Array;

    constructor() {
        this.grad3 = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);
        this.p = new Uint8Array(256);
        for (let i = 0; i < 256; i++) this.p[i] = Math.floor(Math.random() * 256);
        this.perm = new Uint8Array(512);
        this.permMod12 = new Uint8Array(512);
        for (let i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
            this.permMod12[i] = this.perm[i] % 12;
        }
    }

    noise3D(xin: number, yin: number, zin: number): number {
        const F3 = 1.0 / 3.0;
        const G3 = 1.0 / 6.0;
        let s = (xin + yin + zin) * F3;
        let i = Math.floor(xin + s);
        let j = Math.floor(yin + s);
        let k = Math.floor(zin + s);
        let t = (i + j + k) * G3;
        let X0 = i - t;
        let Y0 = j - t;
        let Z0 = k - t;
        let x0 = xin - X0;
        let y0 = yin - Y0;
        let z0 = zin - Z0;
        let i1, j1, k1, i2, j2, k2;
        if (x0 >= y0) {
            if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
            else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
            else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
        } else {
            if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
            else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
            else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
        }
        let x1 = x0 - i1 + G3;
        let y1 = y0 - j1 + G3;
        let z1 = z0 - k1 + G3;
        let x2 = x0 - i2 + 2.0 * G3;
        let y2 = y0 - j2 + 2.0 * G3;
        let z2 = z0 - k2 + 2.0 * G3;
        let x3 = x0 - 1.0 + 3.0 * G3;
        let y3 = y0 - 1.0 + 3.0 * G3;
        let z3 = z0 - 1.0 + 3.0 * G3;
        let ii = i & 255;
        let jj = j & 255;
        let kk = k & 255;
        let gi0 = this.permMod12[ii + this.perm[jj + this.perm[kk]]];
        let gi1 = this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]];
        let gi2 = this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]];
        let gi3 = this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]];
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        let n0 = t0 < 0 ? 0.0 : t0 * t0 * t0 * t0 * (this.grad3[gi0 * 3] * x0 + this.grad3[gi0 * 3 + 1] * y0 + this.grad3[gi0 * 3 + 2] * z0);
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        let n1 = t1 < 0 ? 0.0 : t1 * t1 * t1 * t1 * (this.grad3[gi1 * 3] * x1 + this.grad3[gi1 * 3 + 1] * y1 + this.grad3[gi1 * 3 + 2] * z1);
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        let n2 = t2 < 0 ? 0.0 : t2 * t2 * t2 * t2 * (this.grad3[gi2 * 3] * x2 + this.grad3[gi2 * 3 + 1] * y2 + this.grad3[gi2 * 3 + 2] * z2);
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        let n3 = t3 < 0 ? 0.0 : t3 * t3 * t3 * t3 * (this.grad3[gi3 * 3] * x3 + this.grad3[gi3 * 3 + 1] * y3 + this.grad3[gi3 * 3 + 2] * z3);
        return 32.0 * (n0 + n1 + n2 + n3);
    }
}

export function Background3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let time = 0;

        // Mouse State
        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetMouseX = width / 2;
        let targetMouseY = height / 2;

        // Noise
        const noise = new SimplexNoise();

        // Configuration
        const CORE_PARTICLE_COUNT = 2000; // High density for the core
        const SHELL_RADIUS = 280;
        const CORE_BASE_RADIUS = 180;
        const NOISE_AMPLITUDE = 60;
        const NOISE_SCALE = 0.015;

        // Floating Particles
        const FLOATING_PARTICLES_COUNT = 200; // Increased from 50 to 200
        const floatingParticles: { x: number, y: number, z: number, size: number, speed: number }[] = [];

        for (let i = 0; i < FLOATING_PARTICLES_COUNT; i++) {
            floatingParticles.push({
                x: (Math.random() - 0.5) * width * 2, // Wider spread
                y: (Math.random() - 0.5) * height * 2,
                z: (Math.random() - 0.5) * 2000, // Deeper field
                size: Math.random() * 6 + 2, // Slightly larger
                speed: Math.random() * 0.5 + 0.1
            });
        }

        // Core Particles (Sphere distribution)
        const coreParticles: { theta: number, phi: number, baseRadius: number }[] = [];
        for (let i = 0; i < CORE_PARTICLE_COUNT; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            coreParticles.push({
                theta,
                phi,
                baseRadius: CORE_BASE_RADIUS
            });
        }

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const animate = () => {
            time += 0.01;

            // Smooth mouse follow
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            // Rotation based on mouse
            const rotationY = (mouseX / width - 0.5) * 1.5;
            const rotationX = (mouseY / height - 0.5) * 1.5;

            // Clear
            ctx.fillStyle = theme === 'dark' ? '#050505' : '#f0f0f0'; // Deep black or soft white
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            // Helper to project 3D point
            const project = (x: number, y: number, z: number) => {
                // Rotate Y
                let x1 = x * Math.cos(rotationY) - z * Math.sin(rotationY);
                let z1 = z * Math.cos(rotationY) + x * Math.sin(rotationY);

                // Rotate X
                let y1 = y * Math.cos(rotationX) - z1 * Math.sin(rotationX);
                let z2 = z1 * Math.cos(rotationX) + y * Math.sin(rotationX);

                const scale = 1000 / (1000 + z2);
                return {
                    x: centerX + x1 * scale,
                    y: centerY + y1 * scale,
                    scale: scale,
                    z: z2
                };
            };

            // 1. Draw Floating Particles (Background)
            // Made them more visible gray
            ctx.fillStyle = theme === 'dark' ? 'rgba(150, 150, 150, 0.6)' : 'rgba(100, 100, 100, 0.4)';
            floatingParticles.forEach(p => {
                const proj = project(p.x, p.y, p.z);
                ctx.fillRect(proj.x, proj.y, p.size * proj.scale, p.size * proj.scale);
            });

            // 2. Draw Wireframe Shell
            ctx.strokeStyle = theme === 'dark' ? 'rgba(50, 50, 50, 0.3)' : 'rgba(0, 0, 0, 0.1)';
            ctx.lineWidth = 1;

            // Draw lat/long lines for shell
            const shellSteps = 12;
            for (let i = 0; i <= shellSteps; i++) {
                const phi = (i / shellSteps) * Math.PI;
                const y = SHELL_RADIUS * Math.cos(phi);
                const r = SHELL_RADIUS * Math.sin(phi);

                ctx.beginPath();
                for (let j = 0; j <= 24; j++) {
                    const theta = (j / 24) * Math.PI * 2;
                    const x = r * Math.cos(theta);
                    const z = r * Math.sin(theta);
                    const proj = project(x, y, z);
                    if (j === 0) ctx.moveTo(proj.x, proj.y);
                    else ctx.lineTo(proj.x, proj.y);
                }
                ctx.stroke();
            }
            // Longitude lines
            for (let i = 0; i < 12; i++) {
                const theta = (i / 12) * Math.PI * 2;
                ctx.beginPath();
                for (let j = 0; j <= 24; j++) {
                    const phi = (j / 24) * Math.PI;
                    const y = SHELL_RADIUS * Math.cos(phi);
                    const r = SHELL_RADIUS * Math.sin(phi);
                    const x = r * Math.cos(theta);
                    const z = r * Math.sin(theta);
                    const proj = project(x, y, z);
                    if (j === 0) ctx.moveTo(proj.x, proj.y);
                    else ctx.lineTo(proj.x, proj.y);
                }
                ctx.stroke();
            }

            // 3. Draw Fiery Core
            // We draw this as a cloud of colored rectangles/circles

            // Sort particles by Z for depth
            const renderedParticles: any[] = [];

            coreParticles.forEach(p => {
                // Calculate position on sphere
                let x = p.baseRadius * Math.sin(p.phi) * Math.cos(p.theta);
                let y = p.baseRadius * Math.sin(p.phi) * Math.sin(p.theta);
                let z = p.baseRadius * Math.cos(p.phi);

                // Apply Noise Displacement (The "Fire")
                // We animate the noise with 'time'
                const n = noise.noise3D(x * NOISE_SCALE + time, y * NOISE_SCALE - time, z * NOISE_SCALE);
                const displacement = 1 + (n * 0.5 + 0.5) * (NOISE_AMPLITUDE / p.baseRadius);

                x *= displacement;
                y *= displacement;
                z *= displacement;

                const proj = project(x, y, z);

                // Color based on displacement (n)
                // n is roughly -1 to 1.
                // Center (low displacement) -> Yellow/White
                // Tips (high displacement) -> Red/Dark

                let color;
                if (theme === 'dark') {
                    // Fiery: Yellow -> Orange -> Red
                    const val = (n + 1) / 2; // 0 to 1
                    const r = 255;
                    const g = Math.floor(255 * (1 - val * 0.8)); // More red as val increases
                    const b = 0;
                    const alpha = 0.8;
                    color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                } else {
                    // Blue Plasma: White -> Cyan -> Blue
                    const val = (n + 1) / 2;
                    const r = 0;
                    const g = Math.floor(255 * (1 - val * 0.5));
                    const b = 255;
                    const alpha = 0.8;
                    color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                }

                renderedParticles.push({
                    x: proj.x,
                    y: proj.y,
                    z: proj.z,
                    scale: proj.scale,
                    color: color,
                    size: 3 * proj.scale * (1 + n * 0.5) // Tips are larger? Or center larger? Let's vary size
                });
            });

            renderedParticles.sort((a, b) => b.z - a.z);

            renderedParticles.forEach(p => {
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
