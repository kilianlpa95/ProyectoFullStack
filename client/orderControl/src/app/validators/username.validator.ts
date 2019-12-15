import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';

export class UsernameValidator {

  constructor(
    private apiService: ApiService
  ) { }

  users: any[] = [];

  validUsername(fc: FormControl) {
    const username = fc.value.toLowerCase();

    this.apiService.getUsername(username).subscribe(
      data => {
        this.users = data['data'];
        console.log(data['data']);
        console.log(this.users);
      }, (error) => {
        console.error(error);
      }
    );

    if (this.users == null) {
      return { validUsername: true };
    } else { return null; }
  }
}
