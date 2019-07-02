import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { CountriesService } from './countries.service';
import { Country } from './country.model';

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  @Post()
  addCountry(@Body() country: Country) {
    const generatedId = this.countriesService.addCountry(country);
    return { id: generatedId };
  }

  @Get()
  getAllCountries() {
    return this.countriesService.getAllCountries();
  }

  @Get(':id')
  getSingleCountry(@Param('id') countryId: string) {
    return this.countriesService.getSingleCountry(countryId);
  }

  @Patch(':id')
  updateCountry(@Param('id') countryId: string, @Body() country: Country) {
    return this.countriesService.updateCountry(country);
  }

  @Delete(':id')
  removeCountry(@Param('id') countryId: string) {
    return this.countriesService.removeCountry(countryId);
  }
}
