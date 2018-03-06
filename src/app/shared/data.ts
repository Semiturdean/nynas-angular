export interface weatherData {
    clock: string;
    wind: string;
    temperature: string;
    description: string;
}

export interface UpdatableTable {
    updateWeather(data: Array<weatherData>);
}