import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITypeResponse } from '../../Modules/itype-response';
import { IType } from '../../Modules/itype';
import { TypeService } from '../../Services/type.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public types: ITypeResponse|any;
  public objects: IType[] = [];
  public customerEmail:string='';

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
        this.types = data;
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

  loadCustomerOrders() {
    if (this.customerEmail) {
      this._router.navigate(['/customer-orders'], { queryParams: { email: this.customerEmail } });
    } else {
      alert('Please enter an email');
    }
  }

}
