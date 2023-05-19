import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Remove_Tutorial } from 'src/app/actions/tutorial.action';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials$!: Observable<Tutorial[]>;

  constructor(private store: Store) { 
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  ngOnInit(): void {
  }

  delete_tutorial(name:string) {
    this.store.dispatch(new Remove_Tutorial(name));
  }
}
