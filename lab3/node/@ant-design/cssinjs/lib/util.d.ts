export declare function memoResult<T extends object, R>(callback: () => R, deps: T[]): R;
/**
 * Flatten token to string, this will auto cache the result when token not change
 */
export declare function flattenToken(token: any): string;
/**
 * Convert derivative token to key string
 */
export declare function token2key(token: any, salt: string): string;
export declare function supportLayer(): boolean;
export declare function supportWhere(): boolean;
export declare function supportLogicProps(): boolean;
