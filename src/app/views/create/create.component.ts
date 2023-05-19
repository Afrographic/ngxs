import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Add_Tutorial } from 'src/app/actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  add_tutorial(name: string, url: string) {
    this.store.dispatch(new Add_Tutorial({ name: name, url: url }));
  }

}
