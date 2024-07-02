import { Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { Car } from "./entities/car";

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
}