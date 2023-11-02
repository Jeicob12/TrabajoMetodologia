import {Visitor} from "../../../../src/domain/entities/Visitor";
import {Claim} from "../../../../src/domain/entities/Claim";
import {Category} from "../../../../src/domain/entities/Category";

import {LikeHandler} from "../../../../src/application/handlers/LikeHandler";
import LikeCommand from "../../../../src/application/commands/LikeCommand";

import {VisitorRepository} from "../../../../src/infrastructure/repositories/VisitorRepository";
import {ClaimRepository} from "../../../../src/infrastructure/repositories/ClaimRepository";
import {ClaimMother} from "../../../shared/mothers/ClaimMother";

describe('unit - like handler tests', () => {

  let sut: LikeHandler;

  let mockVisitorRepository: VisitorRepository;
  let mockClaimRepository: ClaimRepository;

  beforeEach(() => {
    mockVisitorRepository = new VisitorRepository()
    mockClaimRepository = new ClaimRepository();

    sut = new LikeHandler(
      mockVisitorRepository,
      mockClaimRepository,
    );
  });

  test('should like a claim', async () => {
    // arrange
    const visitor = Visitor.create(
      '127.0.0.1',
      'pepito perez',
      '123456',
    );

    await mockVisitorRepository.save(visitor);

    const category = Category.create(
      'category',
      'rojo'
    );

    const claim = ClaimMother.withoutLikes(visitor, category)

    await mockClaimRepository.save(claim)

    const command = new LikeCommand(
      visitor.getId(),
      '123456',
      claim.getId(),
    );

    // act
    await sut.execute(command);


    //asserts
    expect(claim.hasVisitorLiked(visitor.getId())).toBeTruthy()
  });

  test('should fail when visitor already liked', async () => {
    // arrange
    const visitor = Visitor.create(
      '127.0.0.1',
      'pepito perez',
      '123456',
    );

    await mockVisitorRepository.save(visitor);

    const category = Category.create(
      'category',
      'rojo'
    );

    const claim = ClaimMother.withLikes(visitor, category, [visitor.getId()]);

    await mockClaimRepository.save(claim)

    const command = new LikeCommand(
      visitor.getId(),
      '123456',
      claim.getId(),
    );

    // act
    await expect(sut.execute(command)).rejects.toThrowError('Visitor has already liked this claim.');
  });

  test('should fail when visitor pin does not match', async () => {
    // arrange
    const visitor = Visitor.create(
      '127.0.0.1',
      'pepito perez',
      '123456',
    );

    await mockVisitorRepository.save(visitor);

    const category = Category.create(
      'category',
      'rojo'
    );

    const claim = Claim.create(
      visitor,
      'un test',
      'description',
      category,
      'location'
    );

    await mockClaimRepository.save(claim)

    const command = new LikeCommand(
      visitor.getId(),
      '123458',
      claim.getId(),
    );

    // act
    await expect(sut.execute(command)).rejects.toThrowError('Pin does not match');
  });
})