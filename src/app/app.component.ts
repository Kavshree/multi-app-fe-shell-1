import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServiceLibraryService } from 'kavya-myuser-service-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [UserServiceLibraryService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-reservation-system';
  constructor(private userService: UserServiceLibraryService) {

  }

  ngOnInit() {
    this.userService.loggedIn$.subscribe(res => {
      console.log("from shell",this.userService.isLoggedIn, res)
    })
  }

  login() {
    this.userService.login()
  }
}
