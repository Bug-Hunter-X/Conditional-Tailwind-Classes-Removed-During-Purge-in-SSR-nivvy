This solution uses the `safelist` option in Tailwind's configuration:

```javascript
// tailwind.config.js
module.exports = {
  // ... other config
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    safelist: ['bg-red-500'], // Add the classes you need to the safelist
  },
  // ... rest of the config
}
```

Alternatively, this uses the `@layer` directive to include the conditionally applied class in a layer:

```javascript
// styles.css
@layer components {
    .client-only-class { /* ... */ }
}
```
This ensures the class will never be purged.