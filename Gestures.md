# Gestures

motion components provide multiple gesture animation props: whileHover, whileTap, whileFocus, whileDrag and whileInView.

```html
<motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
/>
```

# [Accessibility](https://www.framer.com/motion/gestures/)
### onTap(event, info): void
Callback when the tap gesture successfully ends on this element.

Info: TapInfo

A TapInfo object containing x and y values for the point relative to the device or page

```jsx
function onTap(event, info) {
  console.log(info.point.x, info.point.y)
}
```

```html
<motion.div onTap={onTap} />
```

