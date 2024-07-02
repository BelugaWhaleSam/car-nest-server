import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()

export class CarsService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {

    }

    public async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find({}).catch((e) => {
            throw new InternalServerErrorException(e)
        })
    }
}