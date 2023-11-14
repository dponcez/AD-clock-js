#Analog - Digital Clock (AD Clock)

The **Analog - Digital Clock**, aka (*AD Clock*) is a simple project that allow us to work with the (DOM) **Document Object Model** using *JavaScript* and how we can manipulate it.

**Keys covered in the project**

- document.querySelector()
- Destructuring assignment
- .map() method
- .innerHTML
- .join() method
- Array method
- new Date() object constructor
  - .getHours()
  - .getMinutes()
  - .getSeconds()
  - .getDay()
  - .getDate()
- setInterval()
- .addEventListener()

To start, we need to create a function called *initApp*, using the arrow function like so:

```js
const initApp = () => {}
```

next, we must need add the **DOMContentLoaded** event to *addEventListener()* method, passing the *initApp* function, the *DOMContentLoaded* event allows us to load our *HTML* document completely.

```js
const initApp = () => {

}

document.addEventListener('DOMContentLoaded', initApp)
```

If you need to know more about the [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event), go to MDN.

But if you don't want to use the *DOMContentLoaded* event in the *addEventListener()*, to load the HTML document, you can call the function itself, like the code below.

```js
const initApp = () => {}

initApp()
```