import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Add this import
import { ITypeResponse } from '../../Modules/itype-response';
import { IType } from '../../Modules/itype';
import { TypeService } from '../../Services/type.service';
import { CommonModule } from '@angular/common'; // Add for standalone component

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public Types: ITypeResponse|any;
  public objects: IType[] = [];

  constructor(
    private _typeService: TypeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this._typeService.getTypes().subscribe({
      next: (data: ITypeResponse) => {
        this.Types = data;
        this.objects = data.data;
      },
      error: (er) => {
        console.error("Error:", er);
      }
    });
  }

  navigateToProducts(typeId: number) {
    this._router.navigate(['/products'], { queryParams: { typeId: typeId } });
  }

}
