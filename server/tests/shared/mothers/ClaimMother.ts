import {Visitor }from "../../../src/domain/entities/Visitor";
import {Category  }from "../../../src/domain/entities/Category";
import {Claim } from "../../../src/domain/entities/Claim";

export class ClaimMother {

  static withoutLikes(visitor: Visitor, category: Category): Claim {

    return Claim.create(
      visitor,
      'un titulo',
      'descripcion',
      category,
      'una ubicacion'
    )
  }

  static withLikes(visitor: Visitor, category: Category, strings: string[]) {

    const claim =Claim.create(
      visitor,
      'un titulo',
      'descripcion',
      category,
      'una ubicacion'
    )
    strings.forEach((id ) => {
      claim.approve(id)
    })

    return claim;
  }
}