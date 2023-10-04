// import { Claim } from '../../../src/domain/entities/Claim'
import CreateClaimCommand from '../../../src/application/commands/CreateClaimCommand'
// import accommodationRepository from '../../../infrastructure/repositories/mongodb/accomodation.repository';
// import { AccommodationRepository } from '../../../infrastructure/repositories/mongodb/accomodation.repository';
// import bookingRepository from '../../../infrastructure/repositories/mongodb/booking.repository';
// import passengerRepository from '../../../infrastructure/repositories/mongodb/passenger.repository';
// import { PassengerRepository } from '../../../infrastructure/repositories/mongodb/passenger.repository';
// import Visitor from '../../../domain/entities/Visitor'

class CreateClaimHandler {
//   private passengerRepository: PassengerRepository;
//   private accommodationRepository: AccommodationRepository;

  //   public constructor(
  //     passengerRepository: PassengerRepository,
  //     accommodationRepository: AccommodationRepository
  //   ) {
  //     this.passengerRepository = passengerRepository;
  //     this.accommodationRepository = accommodationRepository;
  //   }

  public async execute (command: CreateClaimCommand): Promise<void> {
    if (!command.getOwner().includes(command.getId())) {
      throw new Error('Owner must be in passengers list')
    }

    if (command.getCreatedAt() > command.getCloneOf()) {
      throw new Error('(From) date must be before (to) date')
    }

    // const owner = await this.passengerRepository.findOneById(
    //   command.getOwnerId()
    // );

    // if (!owner) {
    //   throw new Error('Owner does not exist');
    // }

    // const passengers = command.getPassengerIds();
    // const passengersFromDb: Passenger[] = [];
    // for (let i = 0; i < passengers.length; i++) {
    //   const passenger = await this.passengerRepository.findOneById(passengers[i]);
    //   if (!passenger) {
    //     throw new Error('Passenger does not exist');
    //   } else {
    //     passengersFromDb.push(passenger);
    //   }
    // }

    // const accommodation = await this.accommodationRepository.findOneById(
    //   command.getAccomodationId()
    // );

    // if (!accommodation) {
    //   throw new Error('Accommodation does not exist');
    // }

    // const booking = Booking.create(
    //   owner,
    //   passengersFromDb,
    //   accommodation,
    //   command.getFrom(),
    //   command.getTo()
    // );

    // await bookingRepository.save(booking);
  }
}

export default new CreateClaimHandler() // (
//   passengerRepository,
//   accommodationRepository
// );
