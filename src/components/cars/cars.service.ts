import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCarInput } from './dto/new-car.input';

@Injectable()

export class CarsService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {

    }

    public async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find({}).catch((e) => {
            throw new InternalServerErrorException(e)
        })
    }

    public async addCar(newCarData: NewCarInput): Promise<Car> {
        const newCar = this.carRepository.create(newCarData);
        await this.carRepository.save(newCar).catch((e) => {
            throw new InternalServerErrorException(e);
        })

        return newCar;
    }
}