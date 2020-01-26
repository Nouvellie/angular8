import { Component } from '@angular/core';
@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    toggle:boolean = true
    box:any = {
        titleBox: "Angular",
        contentBox: "Testing messages."
    };
}