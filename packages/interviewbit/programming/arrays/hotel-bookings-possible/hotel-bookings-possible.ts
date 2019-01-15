/**
 * Interviewbit - HotelBookingsPossible
 */

const END: number = 0;
const START: number = 1;

interface Booking {
  event: number;
  value: number;
}

function hotelBookingsPossible(
  arrivals: number[],
  departures: number[],
  k: number
): number {
  const l: number = arrivals.length;
  if (k >= l) {
    return 1;
  }

  const bookings: Booking[] = [];

  for (let i: number = 0; i < arrivals.length; i = i + 1) {
    bookings.push({
      event: START,
      value: arrivals[i]
    });

    bookings.push({
      event: END,
      value: departures[i]
    });
  }

  bookings.sort(
    (a: Booking, b: Booking) =>
      a.value !== b.value ? a.value - b.value : a.event - b.event
  );

  // tslint:disable-next-line
  for (let i: number = 0; i < bookings.length; i = i + 1) {
    if (bookings[i].event === START) {
      // tslint:disable-next-line
      k = k - 1;
    } else {
      // tslint:disable-next-line
      k = k + 1;
    }

    if (k < 0) {
      return 0;
    }
  }

  return 1;
}

export { hotelBookingsPossible };
