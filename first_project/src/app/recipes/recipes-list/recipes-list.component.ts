import { Component, OnInit } from '@angular/core';
import { Recipe} from"../recipes.model"

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is a test", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"),
    new Recipe("A test Recipe", "This is a test", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg")
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
