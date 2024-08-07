import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { Car } from "./entities/car";
import { NewCarInput } from "./dto/new-car.input";

@Resolver()

export class CarsResolver {
    constructor(private carsService: CarsService) {
        console.log('CarsResolver created');
    }

    @Query(returns => [Car])
    public async cars(): Promise<Car[]> {
        return await this.carsService.getAllCars().catch((e) => {
            throw e;
        })
    }

    @Mutation(returns => Car) 
    public async addNewCar(@Args("newCarData") newCarData: NewCarInput): Promise<Car> {
        return await this.carsService.addCar(newCarData).catch((e) => {
            throw e;
        })
    }
}