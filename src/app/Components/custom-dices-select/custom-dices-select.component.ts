import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../../global.service";
import { NgFor, NgIf } from "@angular/common";
import { DiceService } from "../../services/dice.service";
import { Dice } from "../../models/dice.model";
import { environment } from "../../../environments/environment";

@Component({
  selector: "custom-dices-select",
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: "./custom-dices-select.component.html",
  styleUrl: "./custom-dices-select.component.css"
})
export class CustomDicesSelectComponent implements OnInit {
  dices: Dice[] = [];
  imagesUrl = environment.imagesUrl;

  constructor(
    private globalservice: GlobalService,
    private diceService: DiceService
  ) { }

  ngOnInit(): void {
    this.loadCustomDices();
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

  loadCustomDices(): void {
    this.diceService.getAllDices().subscribe({
      next: (data: Dice[]) => {
        this.dices = data;
      },
      error: (err) => {
        console.error("Error cargando dados personalizados:", err);
      }
    });
  }
}
