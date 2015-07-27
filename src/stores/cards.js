
import { toImmutable } from "../utils";
import { RECEIVE_CARDS, ADD_CARD, DELETE_CARD, EDIT_CARD, ADD_ITEM } from "../constants/ActionTypes";

const initialState = toImmutable({});

export default function cards(state = initialState, action) {
  switch (action.type) {
    // == CARD ACTIONS ==
    case RECEIVE_CARDS:
      let newCards = toImmutable(action.cards)
        .toMap()
        .mapKeys((k, v) => v.get("id"));
      return state.merge(newCards);

    case ADD_CARD:
      return state.set(action.card.id, action.card);

    case DELETE_CARD:
      return state.delete(action.cardId);

    case EDIT_CARD:
      return state.update(action.cardId, card =>
        card.set("text", action.text)
      );

    // == ITEM ACTIONS ==
    case ADD_ITEM:
      return state.update(action.cardId, card =>
        card.get("items").push(action.item)
      );

    default:
      return state;
  }
}
