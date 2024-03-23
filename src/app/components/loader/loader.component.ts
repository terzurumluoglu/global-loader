import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {

  isLoader$: Observable<boolean> = new Observable<false>;

  constructor(private loaderService: LoaderService){}

  ngOnInit(): void {
      this.isLoader$ = this.loaderService.isLoading;
  }

}
