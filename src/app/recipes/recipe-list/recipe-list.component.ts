import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("French Fries", "First you need 1kg of potatoes, ...", "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/5/11/0/FNM_060116-Double-Fried-French-Fries_s4x3.jpg.rend.hgtvcom.616.462.suffix/1463001459282.jpeg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
