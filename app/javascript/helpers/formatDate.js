import simpleDateFormat from 'date-fns/format';
import compareDateFormat from 'date-fns/distance_in_words_strict';

const formatDate = (date) => {
    const today = new Date();
    const result = {
        short: simpleDateFormat(date, 'MMM Do, YYYY'),
        long: simpleDateFormat(date, 'MMM Do, YYYY h:mm a')
    };
    if (simpleDateFormat(date, 'M YYYY') === simpleDateFormat(today, 'M YYYY')) {
        const difference = compareDateFormat(date, today);
        result.short = difference.startsWith('0') ? '1 second ago' : `${difference} ago`;
    }
    return result;
};


export default formatDate;
