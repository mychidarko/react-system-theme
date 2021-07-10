# React System Theme

React system is a simple library that makes working with system themes in React super easy.

This library provides a simple helper methods to manage your application theme in three categories:

## React Hooks

React System theme provides react hooks to check the system theme.

### useDarkTheme

```js
import { useDarkTheme } from "react-system-theme";

const Home = () => {
  const isDark = useDarkTheme();

  return isDark ? <DarkHome /> : <LightHome />;
};
```

### useLightTheme

```js
import { useLightTheme } from "react-system-theme";

const Home = () => {
  const isLight = useLightTheme();

  return isLight ? <LightHome /> : <DarkHome />;
};
```

### useSystemTheme

```js
import { useSystemTheme } from "react-system-theme";

const Home = () => {
  const theme = useSystemTheme();

  return theme === "light" ? <LightHome /> : <DarkHome />;
};
```

<!-- ## SystemTheme class

The system theme class can be used in plain JavaScript or any JS based library/framework you work with.

```js

``` -->

## SCSS

If you're using SCSS in your project, there's good news. React system theme provides SCSS mixins to easily switch between system themes in your app.

```scss
@include lightMode {
  .homepage {
    background: white;
  }
}

@include darkMode {
  .homepage {
    background: black;
    color: white;
  }
}
```
