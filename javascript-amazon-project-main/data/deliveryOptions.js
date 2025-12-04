import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [
    {
        id: '1',
        deliveryDays: 7,
        priceCents: 0
    },{
        id: '2',
        deliveryDays: 3,
        priceCents: 499
    },{
        id: '3',
        deliveryDays: 1,
        priceCents: 999
    }
];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption; 

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
        deliveryOption = option;
        }
    });
    return deliveryOption || deliveryOptions[0];
}

function isWeekend(date) {
    const day = date.format('dddd'); // Monday, Tues, ...
    return day === 'Saturday' || day === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption) {
    // Note: Skips all saturdays and sundays
    // deliveryOption.deliveryDays = 7, 3, or 1
    let numDays = deliveryOption.deliveryDays;

    let currentDay = dayjs();

    while (numDays > 0) {
        currentDay = currentDay.add(1, 'days');
        if (!isWeekend(currentDay)) {
            numDays--
        }
    }

    // console.log(currentDay.format('dddd, MMMM D'));

    return currentDay.format('dddd, MMMM D');
}