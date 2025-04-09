import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DiceService } from '../../services/dice.service';
import { Dice } from '../../models/dice.model';
import { environment } from '../../../environments/environment';

@Component({
    standalone: true,
    selector: 'app-list-dices',
    imports: [CommonModule],
    templateUrl: './list-dices.view.html',
    styleUrls: ['./list-dices.view.css']
})
export class ListDicesView implements OnInit {
    dices: Dice[] = [];
    imagesUrl = environment.imagesUrl;
    isLoading = true;

    constructor(private diceService: DiceService) { }

    ngOnInit(): void {
        this.loadDices();
    }

    loadDices(): void {
        this.diceService.getAllDices().subscribe({
            next: (data) => {
                this.dices = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error cargando dados:', err);
                this.isLoading = false;
            }
        });
    }
}
