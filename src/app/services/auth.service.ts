import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { filter, Observable, switchMap } from "rxjs";
import { IUser } from "../shared/models";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable()

export class AuthService {
  user$: Observable<IUser | undefined>;

  constructor(private _afAuth: AngularFireAuth, private _store: AngularFirestore) {
    this.user$ = this._afAuth.authState.pipe(
      filter(data => !!data),
      switchMap(user => {
        return this._store.doc<IUser>(`users/${user?.uid}`).valueChanges();
      })
    );
  }

  createUser(email: string, password: string): Promise<any> {
    return this._afAuth.createUserWithEmailAndPassword(email, password);
  }
}
