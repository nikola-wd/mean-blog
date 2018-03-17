import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileSubscription: Subscription;
  username = '';
  email = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Once component loads, get user's data to display on profile
    this.profileSubscription = this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Set username
      this.email = profile.user.email; // Set e-mail
    });
  }


  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
