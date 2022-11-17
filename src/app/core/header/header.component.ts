import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmModalComponent } from "../../shared/modals/confirm-modal/confirm-modal.component";
import { filter, takeUntil } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AppDestroy } from "../../shared/AppDestroy";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AppDestroy {

  constructor(public auth: AuthService, private _dialog: MatDialog, private _afAuth: AngularFireAuth) {
    super();
  }

  signOut(): void {
    const dialogRef = this._dialog.open(ConfirmModalComponent, {
      data: {
        title: 'Ви впевнені, що бажаєте вийти?',
        cancelButton: 'Ні',
        submitButton: 'Так'
      }
    });

    dialogRef.afterClosed()
      .pipe(
        filter(data => !!data),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this._afAuth.signOut().then(() => window.location.reload())
      });
  }
}
