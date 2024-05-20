import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface httpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface postDef {
  authorName: String,
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface userDef {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface getUserDataParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>,
  username: string;
}

export interface getUserTaskParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>,
  userId: number,
}

export interface changeTaskStatusParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>,
  id: number,
}

export interface changeTaskStatusBody {
  completed: boolean,
}

export interface taskDef {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export interface msgDef {
  message?: string;
  data?: userDef;
}
