import { Component,OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { GlobalService } from "../../global.service";
import { Dice, Face } from "../../models/dice.model";

@Component({
    selector: 'dice-select',
    imports: [NgFor],
    templateUrl: './dice-select.component.html',
    styleUrl: './dice-select.component.css'
})
export class DiceSelectComponent {
    constructor(private globalservice: GlobalService) { }

    // Dados por defecto, hardcodeados
    defaultDices: Dice[] = [
        this.createNumericDice("d4", 4),
        this.createNumericDice("d6", 6),
        this.createNumericDice("d8", 8),
        this.createNumericDice("d10", 10),
        this.createNumericDice("d12", 12),
        this.createNumericDice("d20", 20)
    ];

    // Crea un dado numérico básico
    createNumericDice(name: string, faces: number): Dice {
        const faceArray: Face[] = Array.from({ length: faces }, (_, i) => ({
            faceNumber: i + 1
        }));

        return {
            name,
            faceQty: faces,
            faces: faceArray
        };
    }

    // Getter para acceder desde el template
    get selectedDice(): Dice | null {
        return this.globalservice.dice;
    }

    // Setea el dado y genera un número aleatorio
    setDiceType(dice: Dice): void {
        this.globalservice.setDice(dice);
        this.globalservice.generateRandomFace();
    }

    ngOnInit(): void {
        this.setDiceType(this.defaultDices.find(d => d.faceQty === 20)!);
    }
}
