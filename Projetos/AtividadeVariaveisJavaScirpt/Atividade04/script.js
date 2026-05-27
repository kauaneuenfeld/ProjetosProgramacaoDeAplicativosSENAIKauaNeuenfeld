const ConverterTemperatura = (C) => {
    const fahrenheit = (C * 9/5) + 32;
    return fahrenheit;
}

console.log(ConverterTemperatura(30))