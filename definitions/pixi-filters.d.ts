/// <reference path="pixi.js.d.ts" />

declare module PIXI {

    export module filters {
        export class AdjustmentFilter {
            constructor(options: object | number);
            gamma: number;
            saturation: number;
            contrast: number;
            brightness: number;
            red: number;
            green: number;
            blue: number;
            alpha: number;
        }

        export class AsciiFilter {
            constructor(size: number);
            size: number;
        }

        export class BloomFilter {
            constructor(blur?: number | PIXI.Point | number[], quality?: number, resolution?: number, kernelSize?: number);
            blur: number | PIXI.Point | number[];
            quality: number;
            resolution: number;
            kernelSize: number;
        }

        export class ConvolutionFilter {

            constructor(matrix: number[], width: number, height: number);

            height: number;
            width: number;
            matrix: number[];
        }

        export class CrossHatchFilter {

        }

        export class DotFilter {
            constructor(scale?: number, angle?: number);
            angle: number;
            scale: number;
        }

        export class EmbossFilter {

            strength: number;
        }

        export class GlowFilter {
            constructor(distance?: number, outerStrength?: number, innerStrength?: number, color?: number, quality?: number);
            distance: number;
            outerStrength: number;
            innerStrength: number;
            color: number;
            quality: number;
        }

        export class GlitchFilter {
            constructor(options: object);
            slices: number;
            offset: number;
            direction: number;
            fillMode: boolean;
            seed: number;
            average: boolean;
            minSize: number;
            sampleSize: number;
            red: number;
            green: number;
            blue: number;
        }

        export class GodrayFilter {
            constructor(options: object);
            angle: number;
            gain: number;
            lacunrity: number;
            parallel: boolean;
            time: number;
            center: PIXI.Point;
        }

        export class OldFilmFilter {
            constructor(options: object | number);
            sepia: number;
            noise: number;
            noiseSize: number;
            scratch: number;
            scratchDensity: number;
            scratchWidth: number;
            vignetting: number;
            vignettingAlpha: number;
            vignettingBlur: number;
        }

        export class OutlineFilter {
            constructor(thickness?: number, color?: number, quality?: number);
            thickness: number;
            color: number;
            quality: number;
        }

        export class PixelateFilter {
            constructor(size?: PIXI.Point | number[] | number);
            size: PIXI.Point | number[] | number;
        }

        export class ReflectionFilter {
            constructor(options: object);
            mirror: boolean;
            boundary: number;
            amplitude: number;
            waveLength: number;
            alpha: number;
            time: number;
        }

        export class RGBSplitFilter {
            constructor(red?: number, green?: number, blue?: number);
            blue: PIXI.Point;
            green: PIXI.Point;
            red: PIXI.Point;
        }

        export class ShockwaveFilter {
            constructor(center?: PIXI.Point | number[], options?: object, time?: number);
            center: PIXI.Point | number[];
            amplitude: number;
            brightness: number;
            radius: number;
            speed: number;
            time: number;
            wavelength: number;

        }

        export class TiltShiftFilter {
            constructor(blur?: PIXI.Point, gradientBlur?: number, start?: PIXI.Point, end?: PIXI.Point);
            blur: number;
            gradientBlur: number;
            start: PIXI.Point;
            end: PIXI.Point;
        }

        export class TwistFilter {
            constructor(radius?: number, angle?: number, padding?: number);
            radius: number;
            angle: number;
            offset: PIXI.Point;
        }

        export class ZoomBlurFilter {
            constructor(strength?: number, center?: PIXI.Point, innerRadius?: number, radius?: number);
            strength: number;
            center: PIXI.Point;
            innerRadius: number;
            radius: number;
        }

    }

}