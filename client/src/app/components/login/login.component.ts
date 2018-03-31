import { Component, OnInit } from '@angular/core';
import { OpenCloseModalService } from '../../services/open-close-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private openModalService: OpenCloseModalService,
  ) { }

  ngOnInit() {
  }

  closeLoginPage() {
    this.openModalService.closeLoginPage();
  }

}
