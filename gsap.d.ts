// Type definitions for GSAP
declare const gsap: {
    to(target: any, vars: any): any;
    fromTo(target: any, from: any, to: any): any;
    set(target: any, vars: any): any;
    timeline(vars?: any): any;
    registerPlugin(...plugins: any[]): void;
    utils: {
        toArray(selector: any): any[];
    };
};

declare const ScrollTrigger: {
    refresh(): void;
    create(vars: any): any;
};

// Extend Window interface
declare global {
    interface Window {
        ScrollTrigger?: {
            refresh(): void;
            create(vars: any): any;
        };
        gsap?: typeof gsap;
    }
}

