export const selector = (element) => document.querySelector(element);
export const handleRotate = (element, value) => (element.style.transform = `rotate(${value}deg)`);