export function formatPrice (price) {
    if (price >= 1000000000)
        return (
            Math.round(price/1000000000 * 100) / 100 + " tỷ"
        );
    return (
            Math.round(price/1000000 * 100) / 100 + " triệu"
    );
}