import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private storageKey = 'user-background';
  private defaultColor = '#bedac9';
  userBackgroundColor = null;

  ngOnInit(): void {
    this.loadBackgroundPreferences();
  }
  private loadBackgroundPreferences(): void {
    this.userBackgroundColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor();
  }
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storageKey) || this.defaultColor;
  }
  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
}
