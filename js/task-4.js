
function getShippingCost(country) {
    let result;
    const priceChina = 100
    const priceChile = 250
    const priceAustralia = 170
    const priceJamaica = 120

    switch (country) {
        case "China":
            result = `Shipping to ${country} will cost ${priceChina} credits`;
            break;
        case "Chile":
            result = `Shipping to ${country} will cost ${priceChile} credits`;
            break;
        case "Australia":
            result = `Shipping to ${country} will cost ${priceAustralia} credits`;
            break;
        case "Jamaica":
            result = `Shipping to ${country} will cost ${priceJamaica} credits`;
            break;
        default:
            result = "Sorry, there is no delivery to your country"
    }

    return result
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
