/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { File } from '../models/file';
@Injectable({
  providedIn: 'root',
})
class StorageService extends __BaseService {
  static readonly storageCreatePath = '/storage/';
  static readonly storageReadPath = '/storage/{project_pk}/{task_pk}/';
  static readonly storageFileReadPath = '/storage/{project_pk}/{task_pk}/{filename}';
  static readonly storageFileDeletePath = '/storage/{project_pk}/{task_pk}/{filename}/delete';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `StorageService.StorageCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `file`:
   *
   * @return storage response
   */
  storageCreateResponse(params: StorageService.StorageCreateParams): __Observable<__StrictHttpResponse<File>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.taskPk != null) { __formData.append('task_pk', params.taskPk as string | Blob);}
    if (params.projectPk != null) { __formData.append('project_pk', params.projectPk as string | Blob);}
    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/storage/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<File>;
      })
    );
  }
  /**
   * @param params The `StorageService.StorageCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `file`:
   *
   * @return storage response
   */
  storageCreate(params: StorageService.StorageCreateParams): __Observable<File> {
    return this.storageCreateResponse(params).pipe(
      __map(_r => _r.body as File)
    );
  }

  /**
   * @param params The `StorageService.StorageReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * @return get files
   */
  storageReadResponse(params: StorageService.StorageReadParams): __Observable<__StrictHttpResponse<Array<File>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/storage/${encodeURIComponent(String(params.projectPk))}/${encodeURIComponent(String(params.taskPk))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<File>>;
      })
    );
  }
  /**
   * @param params The `StorageService.StorageReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * @return get files
   */
  storageRead(params: StorageService.StorageReadParams): __Observable<Array<File>> {
    return this.storageReadResponse(params).pipe(
      __map(_r => _r.body as Array<File>)
    );
  }

  /**
   * @param params The `StorageService.StorageFileReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `filename`:
   */
  storageFileReadResponse(params: StorageService.StorageFileReadParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/storage/${encodeURIComponent(String(params.projectPk))}/${encodeURIComponent(String(params.taskPk))}/${encodeURIComponent(String(params.filename))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `StorageService.StorageFileReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `filename`:
   */
  storageFileRead(params: StorageService.StorageFileReadParams): __Observable<null> {
    return this.storageFileReadResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `StorageService.StorageFileDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `filename`:
   */
  storageFileDeleteResponse(params: StorageService.StorageFileDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/storage/${encodeURIComponent(String(params.projectPk))}/${encodeURIComponent(String(params.taskPk))}/${encodeURIComponent(String(params.filename))}/delete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `StorageService.StorageFileDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `filename`:
   */
  storageFileDelete(params: StorageService.StorageFileDeleteParams): __Observable<null> {
    return this.storageFileDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module StorageService {

  /**
   * Parameters for storageCreate
   */
  export interface StorageCreateParams {
    taskPk: string;
    projectPk: string;
    file: Blob;
  }

  /**
   * Parameters for storageRead
   */
  export interface StorageReadParams {
    taskPk: string;
    projectPk: string;
  }

  /**
   * Parameters for storageFileRead
   */
  export interface StorageFileReadParams {
    taskPk: string;
    projectPk: string;
    filename: string;
  }

  /**
   * Parameters for storageFileDelete
   */
  export interface StorageFileDeleteParams {
    taskPk: string;
    projectPk: string;
    filename: string;
  }
}

export { StorageService }
