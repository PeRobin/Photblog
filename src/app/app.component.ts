import { Component, style } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html', 
    styleUrls: ['app.component.css']
   
})
export class AppComponent {

    emoji = ['🎉', '😍', '😜', '👍'];
    activeEmoji: string;

    randomEmoji(){
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}