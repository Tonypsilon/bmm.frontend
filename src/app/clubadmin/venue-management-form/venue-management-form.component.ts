import {Component, OnChanges} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {Venue} from "../../shared/data/venue";
import {VenueService} from "../../shared/venue.service";
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bmm-venue-management-form',
  templateUrl: './venue-management-form.component.html',
  styleUrls: ['./venue-management-form.component.scss']
})
export class VenueManagementFormComponent implements OnChanges {
  venues$: Observable<Venue[]>;

  form = new FormGroup({
    venueForms: this.buildVenuesArray([])
  });

  get venues() {
    return this.form.controls.venueForms;
  }

  constructor(private venueService: VenueService,
              private route: ActivatedRoute) {
    this.venues$ = this.route.paramMap.pipe(
      map(params => params.get('clubId')!),
      switchMap(clubId => this.venueService.getVenuesOfClub(parseInt(clubId)))
    );
    this.venues$.subscribe(venueResponse => {
      this.setFormValues(venueResponse);
    });
  }

  ngOnChanges() {

  }

  submitForm() {
    const formValue = this.form.getRawValue().venueForms[0].address;
  }

  private setFormValues(venues: Venue[]) {
    this.form.setControl('venueForms', this.buildVenuesArray(venues));
  }

  private buildVenuesArray(venues: Venue[]) {
    return new FormArray(
      venues.map(venue => new FormGroup({
        address: new FormControl<string>(venue.address, {
          nonNullable: true,
          validators: Validators.required
        }),
        hints: new FormControl<string | null | undefined>(venue.hints, {
          nonNullable: false
        })
      }))
    );
  }

  addVenueControl() {
    this.venues.push(
      new FormGroup({
        address: new FormControl<string>('', {
          nonNullable: true,
          validators: Validators.required
        }),
        hints: new FormControl<string | null | undefined>('', {
          nonNullable: false
        })
      })
    );
  }
}
