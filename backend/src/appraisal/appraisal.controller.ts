import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { response } from 'express';
import { get } from 'http';
import { AppraisalService } from './appraisal.service';

@Controller('appraisal')
export class AppraisalController {
  constructor(private readonly appraisalService: AppraisalService) {}

  @Post()
  checkCarAppraisal(driverAge: number, carBrand: string, carValue: number) {
    const response = {
      data: {
        driverAge,
        carBrand,
        carValue,
      },
      error: {
        driverAge: '',
        carValue: '',
        global: ''
      }
    };
    
    const validDriverAge = this.checkDriverAge(driverAge)
    if (!validDriverAge) {
      
    } else if (validDriverAge) {

    }

    return {

    }
    // return (
    //   this.checkDriverAge(driverAge)
    //   && this.checkDriverAge(driverAge, carBrand)
    //   && this.checkCarValue(carValue)
    // );
  }

  // @Post()
  checkDriverAge(driverAge: number) {
    const minimumAge = 18;
    let response = {};

    if (driverAge < minimumAge) {
      response = {
        valid: false,
        msg: 'driver_too_young',
        extra: { driverAge }
      };
    } else {
      response = {
        valid: true,
        msg: '',
        extra: {}
      };
    }

    return response;
  }

  // checkDriverAgeByCarBrand(driverAge: number, carBrand: string) {
  //   const minimumAgeByCarBrand: {
  //     'porshe': 25
  //   };
  //   let response = {};



  //   if (carBranddriverAge < minimumAge) {
  //     response = {
  //       valid: false,
  //       msg: 'driver_too_young_for_porshe',
  //       extra: { driverAge }
  //     };
  //   } else {
  //     response = {
  //       valid: true,
  //       msg: '',
  //       extra: {}
  //     };
  //   }

  //   return response;


  //   const minimumAge = 25;
  //   return (driverAge < minimumAge && carBrand === 'porshe')
  // }

  // private checkCarValue(carValue: number) {
  //   const minimumValue = 4000;
  //   return carValue > minimumValue;
  // }

  @Get()
  findAll() {
    return this.appraisalService.findAll();
  }
}
