# A generic React Multiple Toggle Switch component

A fully configurable multiple switch component.


## Getting Started

Installation

`npm install react-multi-switch-toggle`

### Usage

You can import each animation directly from the main package

```js
import MultiSwitch from 'react-multi-switch-toggle'
```

## Usage

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <MultiSwitch
            texts={[
              'sa 1sa',
              'sa 2sa',
              'sa 3sa',
              'sa 4sa',
              'sa 5sa',
              'sa 6sa',
            ]}
            selectedSwitch={4}
            bgColor={'#e57168'}
            onToggleCallback={this.onToggle}
            fontColor={'white'}
            selectedFontColor={'#1e311b'}
            eachSwitchWidth={150}
            height={'50px'}
            fontSize={'16px'}
        >
        </MultiSwitch>
      </div>
    );
  }

  onToggle(selectedItem){
        console.log(selectedItem)
  }
}
```

### Props

##### `texts`: array
Array of display texts

##### `selectedSwitch`: number
Selected switch

##### `bgColor`: string
Background color

##### `borderWidth`: string
Border width

##### `selectedFontColor`: string
Selected font color

##### `selectedSwitchColor`: string
Selected switch color

##### `fontSize`: string
Font size

##### `fontWeight`: string
Font weight

##### `onToggleCallback`: function
Static text after the animating value

##### `eachSwitchWidth`: string
Width of each switch

##### `height`: number
Height of the component
