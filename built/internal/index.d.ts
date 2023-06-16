import * as M from '..';
export declare type FullParserOpts = {
    nestLimit?: number;
};
export declare function fullParser(input: string, opts: FullParserOpts): M.MfmNode[];
export declare function simpleParser(input: string): M.MfmSimpleNode[];
