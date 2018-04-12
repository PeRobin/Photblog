import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent {
    
    title: string = 'My first Angular Photo';
    photo: string = 'http://placehold.it/600x300?text=Angular Photo'; 
    description: string = 'My first angular photo description!'; 
    comments: any[] = [
        {name: "Robina", comment: "This is a comment"}, 
        {name: "Kjartan", comment: "This is another comment"}, 
        {name: "Nils", comment: "This is third comment"}, 
    ]

}