import { GLTexture } from "./GLTexture";
export declare type vertex = {
    position: number[];
    varying?: any;
};
export declare class GLProgram {
    uniform: any;
    private VertexShader;
    private FragmentShader;
    constructor(vertexShader: (input: any, uniform: any) => vertex, fragmentShader: (uniform: any, varying: any, sampler?: GLTexture[]) => number[]);
    GetVertexByVertexShader(vertex: any): vertex;
    GetColorByFragmentShader(varying?: any, sampler?: GLTexture[]): number[];
}
