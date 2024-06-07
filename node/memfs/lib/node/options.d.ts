import type * as opts from './types/options';
import * as misc from './types/misc';
import { IAppendFileOptions } from '../volume';
export declare const getMkdirOptions: (options: any) => opts.IMkdirOptions;
export declare function getOptions<T extends opts.IOptions>(defaults: T, options?: T | string): T;
export declare function optsGenerator<TOpts>(defaults: TOpts): (opts: any) => TOpts;
export declare function optsAndCbGenerator<TOpts, TResult>(getOpts: any): (options: any, callback?: any) => [TOpts, misc.TCallback<TResult>];
export declare const optsDefaults: opts.IOptions;
export declare const getDefaultOpts: (opts: any) => opts.IOptions;
export declare const getDefaultOptsAndCb: (options: any, callback?: any) => [opts.IOptions, misc.TCallback<any>];
export declare const getRmdirOptions: (options: any) => opts.IRmdirOptions;
export declare const getRmOptsAndCb: (options: any, callback?: any) => [opts.IRmOptions, misc.TCallback<any>];
export declare const getReadFileOptions: (opts: any) => opts.IReadFileOptions;
export declare const getReaddirOptions: (opts: any) => opts.IReaddirOptions;
export declare const getReaddirOptsAndCb: (options: any, callback?: any) => [opts.IReaddirOptions, misc.TCallback<misc.TDataOut[] | misc.IDirent[]>];
export declare const getAppendFileOpts: (opts: any) => IAppendFileOptions;
export declare const getAppendFileOptsAndCb: (options: any, callback?: any) => [IAppendFileOptions, misc.TCallback<void>];
export declare const getStatOptions: (options?: any) => opts.IStatOptions;
export declare const getStatOptsAndCb: (options: any, callback?: misc.TCallback<misc.IStats>) => [opts.IStatOptions, misc.TCallback<misc.IStats>];
export declare const getRealpathOptions: (opts: any) => opts.IRealpathOptions;
export declare const getRealpathOptsAndCb: (options: any, callback?: any) => [opts.IRealpathOptions, misc.TCallback<misc.TDataOut>];
export declare const writeFileDefaults: opts.IWriteFileOptions;
export declare const getWriteFileOptions: (opts: any) => opts.IWriteFileOptions;
