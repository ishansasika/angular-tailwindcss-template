import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home, ArrowLeft } from 'lucide-angular';
import { ButtonComponent } from '../../components/ui/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, ButtonComponent, Home, ArrowLeft],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFoundComponent {
  goBack(): void {
    window.history.back();
  }
}
