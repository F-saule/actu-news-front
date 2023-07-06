import {Component, OnInit} from '@angular/core';
import {Category} from "../../shared/interfaces/models/category";
import {CategoryService} from "../http/category/category.service";
import {CategorySubjectService} from "../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private categorySubjectService: CategorySubjectService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(apiCategoryResponse => {
      this.categories = apiCategoryResponse["hydra:member"];
      this.categorySubjectService.updateCategories(this.categories);
    });

  }

}
