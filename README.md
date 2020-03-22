## react-use-bool

_Simple React boolean hooks_

[![NPM version](https://img.shields.io/npm/v/react-use-bool.svg)](https://www.npmjs.com/package/react-use-bool)

## How to use

```bash
react-use-bool
```

```js
import {useBool, useToggle} from 'react-use-bool'

function Lamp() {
  const [on, turnOn, turnOff] = useBool()

  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={turnOn}>TURN ON</button>
      <button onClick={turnOff}>TURN OFF</button>
    </div>
  )
}

function ToggleLamp() {
  const [on, toggle, setValue] = useToggle(true)

  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={toggle}>TOGGLE</button>
      <button onClick={() => setValue(false)}>OFF</button>
    </div>
  )
}
```
