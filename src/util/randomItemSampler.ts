export function* randomItemSampler<T>(array: T[]) {
    const arrayCpy = [...array];
    while (arrayCpy.length) {
        const selectedIndex = Math.floor(Math.random() * arrayCpy.length);
        const item = arrayCpy[selectedIndex]
        arrayCpy.splice(selectedIndex, 1)
        yield item;
    }

    return;
}

export const randomNItemSampler = <T>(array: T[], n: number): T[] => {
    const sampler = randomItemSampler(array);

    return [...Array(n)].map(() => {
        const next = sampler.next()

        if (next.done || !!!next.value) {
            throw Error("No elements left to sample");
        }

        return next.value;
    })
}