import request from '../utils/request';

const forecastWeather = async (q, days) => {
    const res = await request('forecast.json', {
        params: {
            q,
            days,
        },
    });
    return res.data;
};

export default forecastWeather;
