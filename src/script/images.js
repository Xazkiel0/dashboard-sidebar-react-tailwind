function importAll(r) {
    return r.keys().reduce((acc, next) => {
        let name = next.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
        acc[name] = r(next);
        return acc
    }, {});
}

const images = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));

export default images;