# React Props

## HTML Properties

There are two ways to adding attributes to html elements using React. The first way is adding default html properties using some of React attributes. For example, if you want to add a class name into an html element you can use the React attribute **className** to define a CSS class to that particular element.

```js
<p className='info'>Some text</p>
```

## React Properties

The properties of components in React it looks like the atributes of html elements. One of the big difference is that in React we can name these attributes, which are known as properties, with any name we want.

Here we have the creation structure of a React component. Commonly these components are files terminating with **.jsx** extension and placed inside a **components** folder.
```js
function Card() {
    return (
        <div>
            <h2>Name</h2>
            <p>Description</p>
        </div>
    )
}
```

Right below, we have the card component call which will be rendered later on.
```js
<Card />
```

The first thing that we need to know is that every component in React are functions which it returns html. And the first argument of the component's function it is the component's properties which is an object. So, now we can define a property for the card component.

```js
<Card name='John Doe' />
```

The code above tell us that the property name of the card component has the value of John Doe. The way that we can insert this value on every component is using the first argument of the card component's function. We'll call it by **props**.

```js
function Card(props) {
    return (
        <div>
            <h2>Name</h2>
            <p>Description</p>
        </div>
    )
}
```

> Note that the code above is the same of that we defined earlier with only the difference that we can now use the properties which are passed by argument for our function.

So, the next step is to access that properties. And on React, we can do it by using a set of curly braces with the property name at the middle.

```js
function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Description</p>
        </div>
    )
}
```

> Now, the name of the component is the same value that we passed for the name property of card component which currently is **John Doe**.

To finish, we can do the same with the description area.

First
```js
<Card name='John Doe' description='A fictional character'/>
```

Second
```js
function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}
```