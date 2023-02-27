const loadImage = (url) => {
    const image = new Image();
    image.src = url
    return new Promise(resolve => {
        image.onload = () => {
            resolve(image)
        }
    })
}

export default loadImage
