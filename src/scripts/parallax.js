const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

    Array.from(layers).forEach(layer => {

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 15;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
});

///////// Budda /////////

const parallaxBudda = document.querySelector('.parallax--budda');
const layersBudda = parallaxBudda.children;

function moveLayersBuddaDependsOnScroll(wScroll) {

    Array.from(layersBudda).forEach(layerBudda => {

        const dividerBudda = layerBudda.dataset.speed;
        console.log(wScroll);
        
        const strafeBudda = (wScroll-3000) * dividerBudda / 15;

        layerBudda.style.transform = `translateY(-${strafeBudda}%)`;
    });
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersBuddaDependsOnScroll(wScroll);
});