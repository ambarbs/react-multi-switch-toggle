import React from 'react'
import { render } from 'react-dom'
import MultiSwitch from '../../src'
import './index.css'

const App = () => (
  <div className='app'>
        <h2>React Multiple Toggle Switch - <span className='italics'> a generic component</span></h2>
        <div className='toggle-components'>

              <MultiSwitch
                texts={[
                      'Toggle',
                      'Me',
                ]}
                selectedSwitch={0}
                selectedSwitchColor={'#e578a8'}
                bgColor={'#94e5d4'}
              />
              <MultiSwitch
                texts={[
                      'I',
                      'am',
                      'a',
                      'tall',
                      'switch',
                ]}
                selectedSwitch={2}
                bgColor={'#e5e282'}
                height={'50px'}
                fontSize={'2rem'}
                selectedSwitchColor={'#4231fa'}
                selectedFontColor={'#20fa22'}
                borderColor={'#6a64ff'}
                borderWidth={'0.2rem'}
                eachSwitchWidth={'120'}
              />
              <MultiSwitch
                texts={[
                      'I',
                      'am',
                      'a',
                      'very',
                      'long',
                      'switch',
                ]}
                selectedSwitch={4}
                bgColor={'#e57168'}
                height={'40px'}
                fontSize={'1.5rem'}
                fontColor={'#47596a'}
                borderWidth={0}
                eachSwitchWidth={150}
              />
        </div>
  </div>
)
render(<App/>, document.getElementById('root'))