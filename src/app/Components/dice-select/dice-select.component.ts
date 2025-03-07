import { Component, } from "@angular/core";
import { NgFor } from "@angular/common";
import { GlobalService } from "../../global.service";

@Component({
    selector: 'dice-select',
    imports: [NgFor],
    templateUrl: './dice-select.component.html',
    styleUrl:'./dice-select.component.css'
})
export class DiceSelectComponent {
    constructor(private globalservice: GlobalService){}
    diceTypes: number[] = [4, 6, 8, 10, 12, 20];
    selectedDice: number = 20; 

    get diceType(): number {
        return this.globalservice.diceType
    }

    setDiceType(newDiceType: number): void {
        this.selectedDice = newDiceType;
        this.globalservice.setDiceType(newDiceType)
        this.globalservice.generateRandomNumber();
    }
}