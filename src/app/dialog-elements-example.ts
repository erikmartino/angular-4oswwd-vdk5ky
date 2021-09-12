import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'dialog-elements-example.html'
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['dialog-elements-example-dialog.scss']
})
export class DialogElementsExampleDialog {
  collaborators = ['Svend', 'Knud', 'Validemar', 'Svend', 'Knud'].map(n => {
    return { username: n };
  });
  @ViewChild('username') public username: ElementRef;
  @ViewChild(MatMenuTrigger) menuButton: MatMenuTrigger;

  formControl: FormControl = new FormControl();
  newUsername: string;

  unshare(username: string): void {
    console.info('unshare', username);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
