import { format } from 'date-fns';

export const formatDate = (timestamp, defaultFormat) => {
    if(timestamp) {
        return format(new Date(+timestamp), 'yyyy-MM-dd HH:mm');
    }
    return defaultFormat;
};
export const formatDay = (timestamp) => format(new Date(+timestamp), 'yyy-MM-dd');