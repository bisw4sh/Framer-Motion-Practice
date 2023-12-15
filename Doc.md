# Overview

```html
<motion.div animate={{ x: 100 }} />
```

moves 100px from original position

```html
<motion.div 
animate={{ x, y, rotate }} 
transition={{ type: "spring" }} />
```

# Transition
initial -> in the begining of animation

animate -> final state 

```html
<motion.div 
initial={{ opacity: 0, scale: 0.5 }} 
animate={{ opacity: 1, scale: 1 }} 
transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71,0.2, 1.01] }} 
/>
```

# Exit animations
In React, when a component is removed from the tree, it's removed instantly. Framer Motion provides the **AnimatePresence** component to keep components in the DOM while they perform an exit animation.

- Generally AnimatePresence is used to wrap around the whole
* BrowserRouter
* Routes
* Route

```html
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

# Keyframes

```html
<motion.div
  animate={{ x: [0, 100, 0] }}
/>
```

+1 example

```html
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
```

We can use the current value as the initial keyframe by passing a wildcard keyframe, null.

```html
<motion.div
  animate={{ x: [null, 100, 0] }}
/>
```

This way, if a keyframes animation starts while the value is currently animating, the transition will be more natural. It also reduces duplication in our code.

```html
<motion.div
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3 }}
/>
```

# Gesture animations

Framer Motion has shortcuts for animating to a set of values when gestures start, like hover, tap, drag, focus and inView:

```html

<motion.button
  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}
>
</motion.button>
```

## useAnimate Hook

- Animate any HTML/SVG element
- Create complex sequences of animations
- Control animations with time, speed, play(), pause() and other playback controls.

```jsx
const MyComponent = () => {
  const [scope, animate] = useAnimate()
  
  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { x: "100%" })
      animate("li", { opacity: 1 })
    }
    
    animation()
  }, [])

  return (
    <ul ref={scope}>
      <li />
      <li />
      <li />
    </ul>
  )
}
```