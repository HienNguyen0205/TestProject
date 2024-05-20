import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { changeTaskStatusBody, changeTaskStatusParams, getUserTaskParams, taskDef } from "../types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ToDoService {

  constructor(private apiService: ApiService) {}

  getTaskByUser(url: string, params: getUserTaskParams): Observable<taskDef[]> {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }

  changeTaskStatus(url: string, params: changeTaskStatusParams, body: changeTaskStatusBody): Observable<taskDef> {
    return this.apiService.put(url, JSON.stringify(body),{
      params,
      responseType: 'json',
    });
  }
}
