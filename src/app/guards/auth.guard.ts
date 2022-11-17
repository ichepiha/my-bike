import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map, Observable, take, tap } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _afAuth: AngularFireAuth, private _router: Router) {
  }

  canActivate(): boolean | Observable<boolean> {

    return this._afAuth.authState.pipe(
      take(1),
      map(state => !!state),
      tap(authenticated => {
        if (!authenticated) this._router.navigate(['/auth'])
      })
    )
  }
}
