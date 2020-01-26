import { Component } from '@angular/core';
@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    toggleBox:boolean = true;

    box:any = {
        titleBox: "LEAGUE OF LEGENDS",
        contentBox: "Favourite champs"
    };

    lolChamps:string[] = ['Anivia', 'Zed', 'Akali', 'Ezreal'];
}