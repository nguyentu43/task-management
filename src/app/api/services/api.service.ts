/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Profile } from '../models/profile';
import { Project } from '../models/project';
import { Message } from '../models/message';
import { Section } from '../models/section';
import { Tag } from '../models/tag';
import { Task } from '../models/task';
import { Comment } from '../models/comment';
import { Reaction } from '../models/reaction';
import { TodoItem } from '../models/todo-item';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly apiProfilesCreatePath = '/api/profiles/';
  static readonly apiProfilesMeListPath = '/api/profiles/me/';
  static readonly apiProfilesSearchListPath = '/api/profiles/search/';
  static readonly apiProjectsListPath = '/api/projects/';
  static readonly apiProjectsCreatePath = '/api/projects/';
  static readonly apiProjectsReadPath = '/api/projects/{id}/';
  static readonly apiProjectsUpdatePath = '/api/projects/{id}/';
  static readonly apiProjectsPartialUpdatePath = '/api/projects/{id}/';
  static readonly apiProjectsDeletePath = '/api/projects/{id}/';
  static readonly apiProjectsMessagesListPath = '/api/projects/{project_pk}/messages/';
  static readonly apiProjectsMessagesCreatePath = '/api/projects/{project_pk}/messages/';
  static readonly apiProjectsMessagesReadPath = '/api/projects/{project_pk}/messages/{id}/';
  static readonly apiProjectsMessagesUpdatePath = '/api/projects/{project_pk}/messages/{id}/';
  static readonly apiProjectsMessagesPartialUpdatePath = '/api/projects/{project_pk}/messages/{id}/';
  static readonly apiProjectsMessagesDeletePath = '/api/projects/{project_pk}/messages/{id}/';
  static readonly apiProjectsSectionsListPath = '/api/projects/{project_pk}/sections/';
  static readonly apiProjectsSectionsCreatePath = '/api/projects/{project_pk}/sections/';
  static readonly apiProjectsSectionsReadPath = '/api/projects/{project_pk}/sections/{id}/';
  static readonly apiProjectsSectionsUpdatePath = '/api/projects/{project_pk}/sections/{id}/';
  static readonly apiProjectsSectionsPartialUpdatePath = '/api/projects/{project_pk}/sections/{id}/';
  static readonly apiProjectsSectionsDeletePath = '/api/projects/{project_pk}/sections/{id}/';
  static readonly apiProjectsTagsListPath = '/api/projects/{project_pk}/tags/';
  static readonly apiProjectsTagsCreatePath = '/api/projects/{project_pk}/tags/';
  static readonly apiProjectsTagsReadPath = '/api/projects/{project_pk}/tags/{id}/';
  static readonly apiProjectsTagsUpdatePath = '/api/projects/{project_pk}/tags/{id}/';
  static readonly apiProjectsTagsPartialUpdatePath = '/api/projects/{project_pk}/tags/{id}/';
  static readonly apiProjectsTagsDeletePath = '/api/projects/{project_pk}/tags/{id}/';
  static readonly apiProjectsTasksListPath = '/api/projects/{project_pk}/tasks/';
  static readonly apiProjectsTasksCreatePath = '/api/projects/{project_pk}/tasks/';
  static readonly apiProjectsTasksReadPath = '/api/projects/{project_pk}/tasks/{id}/';
  static readonly apiProjectsTasksUpdatePath = '/api/projects/{project_pk}/tasks/{id}/';
  static readonly apiProjectsTasksPartialUpdatePath = '/api/projects/{project_pk}/tasks/{id}/';
  static readonly apiProjectsTasksDeletePath = '/api/projects/{project_pk}/tasks/{id}/';
  static readonly apiProjectsTasksGetActivitiesPath = '/api/projects/{project_pk}/tasks/{id}/activities/';
  static readonly apiProjectsTasksCommentsListPath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/';
  static readonly apiProjectsTasksCommentsCreatePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/';
  static readonly apiProjectsTasksCommentsReactionsListPath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{comment_pk}/reactions/';
  static readonly apiProjectsTasksCommentsReactionsCreatePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{comment_pk}/reactions/';
  static readonly apiProjectsTasksCommentsReactionsReadPath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{comment_pk}/reactions/{id}/';
  static readonly apiProjectsTasksCommentsReactionsUpdatePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{comment_pk}/reactions/{id}/';
  static readonly apiProjectsTasksCommentsReactionsPartialUpdatePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{comment_pk}/reactions/{id}/';
  static readonly apiProjectsTasksCommentsReactionsDeletePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{comment_pk}/reactions/{id}/';
  static readonly apiProjectsTasksCommentsReadPath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{id}/';
  static readonly apiProjectsTasksCommentsUpdatePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{id}/';
  static readonly apiProjectsTasksCommentsPartialUpdatePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{id}/';
  static readonly apiProjectsTasksCommentsDeletePath = '/api/projects/{project_pk}/tasks/{task_pk}/comments/{id}/';
  static readonly apiProjectsTasksTodoListPath = '/api/projects/{project_pk}/tasks/{task_pk}/todo/';
  static readonly apiProjectsTasksTodoCreatePath = '/api/projects/{project_pk}/tasks/{task_pk}/todo/';
  static readonly apiProjectsTasksTodoReadPath = '/api/projects/{project_pk}/tasks/{task_pk}/todo/{id}/';
  static readonly apiProjectsTasksTodoUpdatePath = '/api/projects/{project_pk}/tasks/{task_pk}/todo/{id}/';
  static readonly apiProjectsTasksTodoPartialUpdatePath = '/api/projects/{project_pk}/tasks/{task_pk}/todo/{id}/';
  static readonly apiProjectsTasksTodoDeletePath = '/api/projects/{project_pk}/tasks/{task_pk}/todo/{id}/';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return post profile
   */
  apiProfilesCreateResponse(): __Observable<__StrictHttpResponse<Profile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/profiles/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Profile>;
      })
    );
  }
  /**
   * @return post profile
   */
  apiProfilesCreate(): __Observable<Profile> {
    return this.apiProfilesCreateResponse().pipe(
      __map(_r => _r.body as Profile)
    );
  }

  /**
   * @return get profile
   */
  apiProfilesMeListResponse(): __Observable<__StrictHttpResponse<Profile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profiles/me/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Profile>;
      })
    );
  }
  /**
   * @return get profile
   */
  apiProfilesMeList(): __Observable<Profile> {
    return this.apiProfilesMeListResponse().pipe(
      __map(_r => _r.body as Profile)
    );
  }

  /**
   * @param params The `ApiService.ApiProfilesSearchListParams` containing the following parameters:
   *
   * - `nickname`:
   *
   * - `email`:
   *
   * @return get profiles
   */
  apiProfilesSearchListResponse(params: ApiService.ApiProfilesSearchListParams): __Observable<__StrictHttpResponse<Array<Profile>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.nickname != null) __params = __params.set('nickname', params.nickname.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profiles/search/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Profile>>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProfilesSearchListParams` containing the following parameters:
   *
   * - `nickname`:
   *
   * - `email`:
   *
   * @return get profiles
   */
  apiProfilesSearchList(params: ApiService.ApiProfilesSearchListParams): __Observable<Array<Profile>> {
    return this.apiProfilesSearchListResponse(params).pipe(
      __map(_r => _r.body as Array<Profile>)
    );
  }
  apiProjectsListResponse(): __Observable<__StrictHttpResponse<Array<Project>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Project>>;
      })
    );
  }  apiProjectsList(): __Observable<Array<Project>> {
    return this.apiProjectsListResponse().pipe(
      __map(_r => _r.body as Array<Project>)
    );
  }

  /**
   * @param data undefined
   */
  apiProjectsCreateResponse(data: Project): __Observable<__StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Project>;
      })
    );
  }
  /**
   * @param data undefined
   */
  apiProjectsCreate(data: Project): __Observable<Project> {
    return this.apiProjectsCreateResponse(data).pipe(
      __map(_r => _r.body as Project)
    );
  }

  /**
   * @param id undefined
   */
  apiProjectsReadResponse(id: string): __Observable<__StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Project>;
      })
    );
  }
  /**
   * @param id undefined
   */
  apiProjectsRead(id: string): __Observable<Project> {
    return this.apiProjectsReadResponse(id).pipe(
      __map(_r => _r.body as Project)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsUpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsUpdateResponse(params: ApiService.ApiProjectsUpdateParams): __Observable<__StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Project>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsUpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsUpdate(params: ApiService.ApiProjectsUpdateParams): __Observable<Project> {
    return this.apiProjectsUpdateResponse(params).pipe(
      __map(_r => _r.body as Project)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsPartialUpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsPartialUpdateResponse(params: ApiService.ApiProjectsPartialUpdateParams): __Observable<__StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Project>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsPartialUpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsPartialUpdate(params: ApiService.ApiProjectsPartialUpdateParams): __Observable<Project> {
    return this.apiProjectsPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Project)
    );
  }

  /**
   * @param id undefined
   */
  apiProjectsDeleteResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(id))}/`,
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
   * @param id undefined
   */
  apiProjectsDelete(id: string): __Observable<null> {
    return this.apiProjectsDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param project_pk undefined
   */
  apiProjectsMessagesListResponse(projectPk: string): __Observable<__StrictHttpResponse<Array<Message>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(projectPk))}/messages/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Message>>;
      })
    );
  }
  /**
   * @param project_pk undefined
   */
  apiProjectsMessagesList(projectPk: string): __Observable<Array<Message>> {
    return this.apiProjectsMessagesListResponse(projectPk).pipe(
      __map(_r => _r.body as Array<Message>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsMessagesCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsMessagesCreateResponse(params: ApiService.ApiProjectsMessagesCreateParams): __Observable<__StrictHttpResponse<Message>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/messages/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Message>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsMessagesCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsMessagesCreate(params: ApiService.ApiProjectsMessagesCreateParams): __Observable<Message> {
    return this.apiProjectsMessagesCreateResponse(params).pipe(
      __map(_r => _r.body as Message)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsMessagesReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsMessagesReadResponse(params: ApiService.ApiProjectsMessagesReadParams): __Observable<__StrictHttpResponse<Message>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/messages/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Message>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsMessagesReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsMessagesRead(params: ApiService.ApiProjectsMessagesReadParams): __Observable<Message> {
    return this.apiProjectsMessagesReadResponse(params).pipe(
      __map(_r => _r.body as Message)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsMessagesUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsMessagesUpdateResponse(params: ApiService.ApiProjectsMessagesUpdateParams): __Observable<__StrictHttpResponse<Message>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/messages/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Message>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsMessagesUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsMessagesUpdate(params: ApiService.ApiProjectsMessagesUpdateParams): __Observable<Message> {
    return this.apiProjectsMessagesUpdateResponse(params).pipe(
      __map(_r => _r.body as Message)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsMessagesPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsMessagesPartialUpdateResponse(params: ApiService.ApiProjectsMessagesPartialUpdateParams): __Observable<__StrictHttpResponse<Message>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/messages/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Message>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsMessagesPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsMessagesPartialUpdate(params: ApiService.ApiProjectsMessagesPartialUpdateParams): __Observable<Message> {
    return this.apiProjectsMessagesPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Message)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsMessagesDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsMessagesDeleteResponse(params: ApiService.ApiProjectsMessagesDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/messages/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsMessagesDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsMessagesDelete(params: ApiService.ApiProjectsMessagesDeleteParams): __Observable<null> {
    return this.apiProjectsMessagesDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param project_pk undefined
   */
  apiProjectsSectionsListResponse(projectPk: string): __Observable<__StrictHttpResponse<Array<Section>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(projectPk))}/sections/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Section>>;
      })
    );
  }
  /**
   * @param project_pk undefined
   */
  apiProjectsSectionsList(projectPk: string): __Observable<Array<Section>> {
    return this.apiProjectsSectionsListResponse(projectPk).pipe(
      __map(_r => _r.body as Array<Section>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsSectionsCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsSectionsCreateResponse(params: ApiService.ApiProjectsSectionsCreateParams): __Observable<__StrictHttpResponse<Section>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/sections/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Section>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsSectionsCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsSectionsCreate(params: ApiService.ApiProjectsSectionsCreateParams): __Observable<Section> {
    return this.apiProjectsSectionsCreateResponse(params).pipe(
      __map(_r => _r.body as Section)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsSectionsReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsSectionsReadResponse(params: ApiService.ApiProjectsSectionsReadParams): __Observable<__StrictHttpResponse<Section>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/sections/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Section>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsSectionsReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsSectionsRead(params: ApiService.ApiProjectsSectionsReadParams): __Observable<Section> {
    return this.apiProjectsSectionsReadResponse(params).pipe(
      __map(_r => _r.body as Section)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsSectionsUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsSectionsUpdateResponse(params: ApiService.ApiProjectsSectionsUpdateParams): __Observable<__StrictHttpResponse<Section>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/sections/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Section>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsSectionsUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsSectionsUpdate(params: ApiService.ApiProjectsSectionsUpdateParams): __Observable<Section> {
    return this.apiProjectsSectionsUpdateResponse(params).pipe(
      __map(_r => _r.body as Section)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsSectionsPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsSectionsPartialUpdateResponse(params: ApiService.ApiProjectsSectionsPartialUpdateParams): __Observable<__StrictHttpResponse<Section>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/sections/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Section>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsSectionsPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsSectionsPartialUpdate(params: ApiService.ApiProjectsSectionsPartialUpdateParams): __Observable<Section> {
    return this.apiProjectsSectionsPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Section)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsSectionsDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsSectionsDeleteResponse(params: ApiService.ApiProjectsSectionsDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/sections/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsSectionsDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsSectionsDelete(params: ApiService.ApiProjectsSectionsDeleteParams): __Observable<null> {
    return this.apiProjectsSectionsDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param project_pk undefined
   */
  apiProjectsTagsListResponse(projectPk: string): __Observable<__StrictHttpResponse<Array<Tag>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(projectPk))}/tags/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Tag>>;
      })
    );
  }
  /**
   * @param project_pk undefined
   */
  apiProjectsTagsList(projectPk: string): __Observable<Array<Tag>> {
    return this.apiProjectsTagsListResponse(projectPk).pipe(
      __map(_r => _r.body as Array<Tag>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTagsCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTagsCreateResponse(params: ApiService.ApiProjectsTagsCreateParams): __Observable<__StrictHttpResponse<Tag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tags/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tag>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTagsCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTagsCreate(params: ApiService.ApiProjectsTagsCreateParams): __Observable<Tag> {
    return this.apiProjectsTagsCreateResponse(params).pipe(
      __map(_r => _r.body as Tag)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTagsReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTagsReadResponse(params: ApiService.ApiProjectsTagsReadParams): __Observable<__StrictHttpResponse<Tag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tags/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tag>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTagsReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTagsRead(params: ApiService.ApiProjectsTagsReadParams): __Observable<Tag> {
    return this.apiProjectsTagsReadResponse(params).pipe(
      __map(_r => _r.body as Tag)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTagsUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTagsUpdateResponse(params: ApiService.ApiProjectsTagsUpdateParams): __Observable<__StrictHttpResponse<Tag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tags/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tag>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTagsUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTagsUpdate(params: ApiService.ApiProjectsTagsUpdateParams): __Observable<Tag> {
    return this.apiProjectsTagsUpdateResponse(params).pipe(
      __map(_r => _r.body as Tag)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTagsPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTagsPartialUpdateResponse(params: ApiService.ApiProjectsTagsPartialUpdateParams): __Observable<__StrictHttpResponse<Tag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tags/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tag>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTagsPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTagsPartialUpdate(params: ApiService.ApiProjectsTagsPartialUpdateParams): __Observable<Tag> {
    return this.apiProjectsTagsPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Tag)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTagsDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTagsDeleteResponse(params: ApiService.ApiProjectsTagsDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tags/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsTagsDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTagsDelete(params: ApiService.ApiProjectsTagsDeleteParams): __Observable<null> {
    return this.apiProjectsTagsDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param project_pk undefined
   */
  apiProjectsTasksListResponse(projectPk: string): __Observable<__StrictHttpResponse<Array<Task>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(projectPk))}/tasks/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Task>>;
      })
    );
  }
  /**
   * @param project_pk undefined
   */
  apiProjectsTasksList(projectPk: string): __Observable<Array<Task>> {
    return this.apiProjectsTasksListResponse(projectPk).pipe(
      __map(_r => _r.body as Array<Task>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTasksCreateResponse(params: ApiService.ApiProjectsTasksCreateParams): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCreateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTasksCreate(params: ApiService.ApiProjectsTasksCreateParams): __Observable<Task> {
    return this.apiProjectsTasksCreateResponse(params).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksReadResponse(params: ApiService.ApiProjectsTasksReadParams): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksReadParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksRead(params: ApiService.ApiProjectsTasksReadParams): __Observable<Task> {
    return this.apiProjectsTasksReadResponse(params).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksUpdateResponse(params: ApiService.ApiProjectsTasksUpdateParams): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksUpdate(params: ApiService.ApiProjectsTasksUpdateParams): __Observable<Task> {
    return this.apiProjectsTasksUpdateResponse(params).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksPartialUpdateResponse(params: ApiService.ApiProjectsTasksPartialUpdateParams): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksPartialUpdateParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksPartialUpdate(params: ApiService.ApiProjectsTasksPartialUpdateParams): __Observable<Task> {
    return this.apiProjectsTasksPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksDeleteResponse(params: ApiService.ApiProjectsTasksDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsTasksDeleteParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksDelete(params: ApiService.ApiProjectsTasksDeleteParams): __Observable<null> {
    return this.apiProjectsTasksDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksGetActivitiesParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksGetActivitiesResponse(params: ApiService.ApiProjectsTasksGetActivitiesParams): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.id))}/activities/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksGetActivitiesParams` containing the following parameters:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksGetActivities(params: ApiService.ApiProjectsTasksGetActivitiesParams): __Observable<Task> {
    return this.apiProjectsTasksGetActivitiesResponse(params).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsListParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   */
  apiProjectsTasksCommentsListResponse(params: ApiService.ApiProjectsTasksCommentsListParams): __Observable<__StrictHttpResponse<Array<Comment>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Comment>>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsListParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   */
  apiProjectsTasksCommentsList(params: ApiService.ApiProjectsTasksCommentsListParams): __Observable<Array<Comment>> {
    return this.apiProjectsTasksCommentsListResponse(params).pipe(
      __map(_r => _r.body as Array<Comment>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTasksCommentsCreateResponse(params: ApiService.ApiProjectsTasksCommentsCreateParams): __Observable<__StrictHttpResponse<Comment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTasksCommentsCreate(params: ApiService.ApiProjectsTasksCommentsCreateParams): __Observable<Comment> {
    return this.apiProjectsTasksCommentsCreateResponse(params).pipe(
      __map(_r => _r.body as Comment)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsListParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsListResponse(params: ApiService.ApiProjectsTasksCommentsReactionsListParams): __Observable<__StrictHttpResponse<Array<Reaction>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.commentPk))}/reactions/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Reaction>>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsListParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsList(params: ApiService.ApiProjectsTasksCommentsReactionsListParams): __Observable<Array<Reaction>> {
    return this.apiProjectsTasksCommentsReactionsListResponse(params).pipe(
      __map(_r => _r.body as Array<Reaction>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `data`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsCreateResponse(params: ApiService.ApiProjectsTasksCommentsReactionsCreateParams): __Observable<__StrictHttpResponse<Reaction>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.commentPk))}/reactions/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reaction>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `data`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsCreate(params: ApiService.ApiProjectsTasksCommentsReactionsCreateParams): __Observable<Reaction> {
    return this.apiProjectsTasksCommentsReactionsCreateResponse(params).pipe(
      __map(_r => _r.body as Reaction)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsReadResponse(params: ApiService.ApiProjectsTasksCommentsReactionsReadParams): __Observable<__StrictHttpResponse<Reaction>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.commentPk))}/reactions/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reaction>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsRead(params: ApiService.ApiProjectsTasksCommentsReactionsReadParams): __Observable<Reaction> {
    return this.apiProjectsTasksCommentsReactionsReadResponse(params).pipe(
      __map(_r => _r.body as Reaction)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsUpdateResponse(params: ApiService.ApiProjectsTasksCommentsReactionsUpdateParams): __Observable<__StrictHttpResponse<Reaction>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.data;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.commentPk))}/reactions/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reaction>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsUpdate(params: ApiService.ApiProjectsTasksCommentsReactionsUpdateParams): __Observable<Reaction> {
    return this.apiProjectsTasksCommentsReactionsUpdateResponse(params).pipe(
      __map(_r => _r.body as Reaction)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsPartialUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsPartialUpdateResponse(params: ApiService.ApiProjectsTasksCommentsReactionsPartialUpdateParams): __Observable<__StrictHttpResponse<Reaction>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.data;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.commentPk))}/reactions/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reaction>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsPartialUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsPartialUpdate(params: ApiService.ApiProjectsTasksCommentsReactionsPartialUpdateParams): __Observable<Reaction> {
    return this.apiProjectsTasksCommentsReactionsPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Reaction)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsDeleteResponse(params: ApiService.ApiProjectsTasksCommentsReactionsDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.commentPk))}/reactions/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsTasksCommentsReactionsDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `comment_pk`:
   */
  apiProjectsTasksCommentsReactionsDelete(params: ApiService.ApiProjectsTasksCommentsReactionsDeleteParams): __Observable<null> {
    return this.apiProjectsTasksCommentsReactionsDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksCommentsReadResponse(params: ApiService.ApiProjectsTasksCommentsReadParams): __Observable<__StrictHttpResponse<Comment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksCommentsRead(params: ApiService.ApiProjectsTasksCommentsReadParams): __Observable<Comment> {
    return this.apiProjectsTasksCommentsReadResponse(params).pipe(
      __map(_r => _r.body as Comment)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksCommentsUpdateResponse(params: ApiService.ApiProjectsTasksCommentsUpdateParams): __Observable<__StrictHttpResponse<Comment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksCommentsUpdate(params: ApiService.ApiProjectsTasksCommentsUpdateParams): __Observable<Comment> {
    return this.apiProjectsTasksCommentsUpdateResponse(params).pipe(
      __map(_r => _r.body as Comment)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsPartialUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksCommentsPartialUpdateResponse(params: ApiService.ApiProjectsTasksCommentsPartialUpdateParams): __Observable<__StrictHttpResponse<Comment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Comment>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsPartialUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksCommentsPartialUpdate(params: ApiService.ApiProjectsTasksCommentsPartialUpdateParams): __Observable<Comment> {
    return this.apiProjectsTasksCommentsPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as Comment)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksCommentsDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksCommentsDeleteResponse(params: ApiService.ApiProjectsTasksCommentsDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/comments/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsTasksCommentsDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksCommentsDelete(params: ApiService.ApiProjectsTasksCommentsDeleteParams): __Observable<null> {
    return this.apiProjectsTasksCommentsDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksTodoListParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   */
  apiProjectsTasksTodoListResponse(params: ApiService.ApiProjectsTasksTodoListParams): __Observable<__StrictHttpResponse<Array<TodoItem>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/todo/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoItem>>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksTodoListParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   */
  apiProjectsTasksTodoList(params: ApiService.ApiProjectsTasksTodoListParams): __Observable<Array<TodoItem>> {
    return this.apiProjectsTasksTodoListResponse(params).pipe(
      __map(_r => _r.body as Array<TodoItem>)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksTodoCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTasksTodoCreateResponse(params: ApiService.ApiProjectsTasksTodoCreateParams): __Observable<__StrictHttpResponse<TodoItem>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/todo/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoItem>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksTodoCreateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `data`:
   */
  apiProjectsTasksTodoCreate(params: ApiService.ApiProjectsTasksTodoCreateParams): __Observable<TodoItem> {
    return this.apiProjectsTasksTodoCreateResponse(params).pipe(
      __map(_r => _r.body as TodoItem)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksTodoReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksTodoReadResponse(params: ApiService.ApiProjectsTasksTodoReadParams): __Observable<__StrictHttpResponse<TodoItem>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/todo/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoItem>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksTodoReadParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksTodoRead(params: ApiService.ApiProjectsTasksTodoReadParams): __Observable<TodoItem> {
    return this.apiProjectsTasksTodoReadResponse(params).pipe(
      __map(_r => _r.body as TodoItem)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksTodoUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksTodoUpdateResponse(params: ApiService.ApiProjectsTasksTodoUpdateParams): __Observable<__StrictHttpResponse<TodoItem>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.data;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/todo/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoItem>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksTodoUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksTodoUpdate(params: ApiService.ApiProjectsTasksTodoUpdateParams): __Observable<TodoItem> {
    return this.apiProjectsTasksTodoUpdateResponse(params).pipe(
      __map(_r => _r.body as TodoItem)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksTodoPartialUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksTodoPartialUpdateResponse(params: ApiService.ApiProjectsTasksTodoPartialUpdateParams): __Observable<__StrictHttpResponse<TodoItem>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.data;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/todo/${encodeURIComponent(String(params.id))}/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoItem>;
      })
    );
  }
  /**
   * @param params The `ApiService.ApiProjectsTasksTodoPartialUpdateParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   *
   * - `data`:
   */
  apiProjectsTasksTodoPartialUpdate(params: ApiService.ApiProjectsTasksTodoPartialUpdateParams): __Observable<TodoItem> {
    return this.apiProjectsTasksTodoPartialUpdateResponse(params).pipe(
      __map(_r => _r.body as TodoItem)
    );
  }

  /**
   * @param params The `ApiService.ApiProjectsTasksTodoDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksTodoDeleteResponse(params: ApiService.ApiProjectsTasksTodoDeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/projects/${encodeURIComponent(String(params.projectPk))}/tasks/${encodeURIComponent(String(params.taskPk))}/todo/${encodeURIComponent(String(params.id))}/`,
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
   * @param params The `ApiService.ApiProjectsTasksTodoDeleteParams` containing the following parameters:
   *
   * - `task_pk`:
   *
   * - `project_pk`:
   *
   * - `id`:
   */
  apiProjectsTasksTodoDelete(params: ApiService.ApiProjectsTasksTodoDeleteParams): __Observable<null> {
    return this.apiProjectsTasksTodoDeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApiService {

  /**
   * Parameters for apiProfilesSearchList
   */
  export interface ApiProfilesSearchListParams {
    nickname?: string;
    email?: string;
  }

  /**
   * Parameters for apiProjectsUpdate
   */
  export interface ApiProjectsUpdateParams {
    id: string;
    data: Project;
  }

  /**
   * Parameters for apiProjectsPartialUpdate
   */
  export interface ApiProjectsPartialUpdateParams {
    id: string;
    data: Project;
  }

  /**
   * Parameters for apiProjectsMessagesCreate
   */
  export interface ApiProjectsMessagesCreateParams {
    projectPk: string;
    data: Message;
  }

  /**
   * Parameters for apiProjectsMessagesRead
   */
  export interface ApiProjectsMessagesReadParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsMessagesUpdate
   */
  export interface ApiProjectsMessagesUpdateParams {
    projectPk: string;
    id: string;
    data: Message;
  }

  /**
   * Parameters for apiProjectsMessagesPartialUpdate
   */
  export interface ApiProjectsMessagesPartialUpdateParams {
    projectPk: string;
    id: string;
    data: Message;
  }

  /**
   * Parameters for apiProjectsMessagesDelete
   */
  export interface ApiProjectsMessagesDeleteParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsSectionsCreate
   */
  export interface ApiProjectsSectionsCreateParams {
    projectPk: string;
    data: Section;
  }

  /**
   * Parameters for apiProjectsSectionsRead
   */
  export interface ApiProjectsSectionsReadParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsSectionsUpdate
   */
  export interface ApiProjectsSectionsUpdateParams {
    projectPk: string;
    id: string;
    data: Section;
  }

  /**
   * Parameters for apiProjectsSectionsPartialUpdate
   */
  export interface ApiProjectsSectionsPartialUpdateParams {
    projectPk: string;
    id: string;
    data: Section;
  }

  /**
   * Parameters for apiProjectsSectionsDelete
   */
  export interface ApiProjectsSectionsDeleteParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTagsCreate
   */
  export interface ApiProjectsTagsCreateParams {
    projectPk: string;
    data: Tag;
  }

  /**
   * Parameters for apiProjectsTagsRead
   */
  export interface ApiProjectsTagsReadParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTagsUpdate
   */
  export interface ApiProjectsTagsUpdateParams {
    projectPk: string;
    id: string;
    data: Tag;
  }

  /**
   * Parameters for apiProjectsTagsPartialUpdate
   */
  export interface ApiProjectsTagsPartialUpdateParams {
    projectPk: string;
    id: string;
    data: Tag;
  }

  /**
   * Parameters for apiProjectsTagsDelete
   */
  export interface ApiProjectsTagsDeleteParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksCreate
   */
  export interface ApiProjectsTasksCreateParams {
    projectPk: string;
    data: Task;
  }

  /**
   * Parameters for apiProjectsTasksRead
   */
  export interface ApiProjectsTasksReadParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksUpdate
   */
  export interface ApiProjectsTasksUpdateParams {
    projectPk: string;
    id: string;
    data: Task;
  }

  /**
   * Parameters for apiProjectsTasksPartialUpdate
   */
  export interface ApiProjectsTasksPartialUpdateParams {
    projectPk: string;
    id: string;
    data: Task;
  }

  /**
   * Parameters for apiProjectsTasksDelete
   */
  export interface ApiProjectsTasksDeleteParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksGetActivities
   */
  export interface ApiProjectsTasksGetActivitiesParams {
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsList
   */
  export interface ApiProjectsTasksCommentsListParams {
    taskPk: string;
    projectPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsCreate
   */
  export interface ApiProjectsTasksCommentsCreateParams {
    taskPk: string;
    projectPk: string;
    data: Comment;
  }

  /**
   * Parameters for apiProjectsTasksCommentsReactionsList
   */
  export interface ApiProjectsTasksCommentsReactionsListParams {
    taskPk: string;
    projectPk: string;
    commentPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsReactionsCreate
   */
  export interface ApiProjectsTasksCommentsReactionsCreateParams {
    taskPk: string;
    projectPk: string;
    data: Reaction;
    commentPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsReactionsRead
   */
  export interface ApiProjectsTasksCommentsReactionsReadParams {
    taskPk: string;
    projectPk: string;
    id: string;
    commentPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsReactionsUpdate
   */
  export interface ApiProjectsTasksCommentsReactionsUpdateParams {
    taskPk: string;
    projectPk: string;
    id: string;
    data: Reaction;
    commentPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsReactionsPartialUpdate
   */
  export interface ApiProjectsTasksCommentsReactionsPartialUpdateParams {
    taskPk: string;
    projectPk: string;
    id: string;
    data: Reaction;
    commentPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsReactionsDelete
   */
  export interface ApiProjectsTasksCommentsReactionsDeleteParams {
    taskPk: string;
    projectPk: string;
    id: string;
    commentPk: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsRead
   */
  export interface ApiProjectsTasksCommentsReadParams {
    taskPk: string;
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksCommentsUpdate
   */
  export interface ApiProjectsTasksCommentsUpdateParams {
    taskPk: string;
    projectPk: string;
    id: string;
    data: Comment;
  }

  /**
   * Parameters for apiProjectsTasksCommentsPartialUpdate
   */
  export interface ApiProjectsTasksCommentsPartialUpdateParams {
    taskPk: string;
    projectPk: string;
    id: string;
    data: Comment;
  }

  /**
   * Parameters for apiProjectsTasksCommentsDelete
   */
  export interface ApiProjectsTasksCommentsDeleteParams {
    taskPk: string;
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksTodoList
   */
  export interface ApiProjectsTasksTodoListParams {
    taskPk: string;
    projectPk: string;
  }

  /**
   * Parameters for apiProjectsTasksTodoCreate
   */
  export interface ApiProjectsTasksTodoCreateParams {
    taskPk: string;
    projectPk: string;
    data: TodoItem;
  }

  /**
   * Parameters for apiProjectsTasksTodoRead
   */
  export interface ApiProjectsTasksTodoReadParams {
    taskPk: string;
    projectPk: string;
    id: string;
  }

  /**
   * Parameters for apiProjectsTasksTodoUpdate
   */
  export interface ApiProjectsTasksTodoUpdateParams {
    taskPk: string;
    projectPk: string;
    id: string;
    data: TodoItem;
  }

  /**
   * Parameters for apiProjectsTasksTodoPartialUpdate
   */
  export interface ApiProjectsTasksTodoPartialUpdateParams {
    taskPk: string;
    projectPk: string;
    id: string;
    data: TodoItem;
  }

  /**
   * Parameters for apiProjectsTasksTodoDelete
   */
  export interface ApiProjectsTasksTodoDeleteParams {
    taskPk: string;
    projectPk: string;
    id: string;
  }
}

export { ApiService }
