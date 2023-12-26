import * as actionType from './actionType'

const initializeState = {
    bookings: []
}

const BookingReducer = (state = initializeState, action) => {
    switch (action.type) {
        case actionType.AddTimeSlot:
            return {
                ...state,
                bookings: {
                    ...state.bookings,
                    ...action.payload
                }
            }
        default: 
        return {...state};
    }
}

export default BookingReducer

