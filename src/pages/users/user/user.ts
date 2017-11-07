import { Component, OnInIt } from "@angular/core";
import { NavParams } from "ionic-angular";
@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})

export class UserPage implements OnInIt {
    name: string;
    
    constructor (private navParams: NavParams) {}
    
    ngOnIt() {
        this.name = this.navParams.get('userName')
    }
}