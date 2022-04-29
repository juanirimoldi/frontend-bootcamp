import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private viewName: string;
  private viewName$ = new Subject<string>();
  private backIcon: boolean;
  private backIcon$ = new Subject<boolean>();
  private history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  updateViewName(view: string):void{
    this.viewName = view;
    this.viewName$.next(this.viewName);
  }
  
  getViewName$(): Observable<string> {
    return this.viewName$.asObservable();
  }

  getBackIcon$(): Observable<boolean>{
    return this.backIcon$.asObservable();
  }

  setBackIcon(back: boolean): void{
    this.backIcon = back;
    this.backIcon$.next(this.backIcon);
  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
