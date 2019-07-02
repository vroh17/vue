import { Injectable, NotFoundException } from '@nestjs/common';

import { Country } from './country.model';

@Injectable()
export class CountriesService {
  private countries: Country[] = [];

  addCountry(country: Country): string {
    const id = new Date().getMilliseconds().toString();
    const newCountry = { ...country, id };
    this.countries = [...this.countries, newCountry];
    return id;
  }

  getAllCountries(): Country[] {
    return [...this.countries];
  }

  getSingleCountry(countryId): Country {
    const country = this.countries.find(item => item.id === countryId);
    if (!country) {
      throw new NotFoundException('Could not find country');
    }
    return { ...country };
  }

  updateCountry(country): Country[] {
    const countryIndex = this.countries.findIndex(
      item => item.id === country.id,
    );
    this.countries = [
      ...this.countries.slice(0, countryIndex),
      country,
      ...this.countries.slice(countryIndex + 1),
    ];
    return this.countries;
  }

  removeCountry(countryId): Country[] {
    this.countries = this.countries.filter(item => item.id !== countryId);
    return this.countries;
  }
}
