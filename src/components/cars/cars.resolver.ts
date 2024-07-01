import { Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";

@Resolver()

export class CarsResolver {
    constructor(private carsService: CarsService) {
        console.log('CarsResolver created');
    }

    @Query(returns => String)
    public async cars() {
        return "Hello Welcome to Cars!";
    }
}