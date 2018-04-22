import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './MultiSwitch.css'

export default class MultiSwitch extends Component {

      constructor (props) {
            super(props)
            this.state = {
                  selectedSwitch: props.selectedSwitch || 0,
                  loaded: false
            }
      }

      onToggle (ev) {
            const id = ev && parseInt(ev.target.id, 10)
            this.props.onToggleCallback && this.props.onToggleCallback(id)
            this.setState({
                  loaded: true,
                  selectedSwitch: id,
            })
      }

      render () {
            const {
                  texts,
                  bgColor,
                  eachSwitchWidth,
                  fontColor,
                  selectedFontColor,
                  fontSize,
                  fontWeight,
                  height,
                  borderColor,
                  borderWidth,
            } = this.props
            const {
                  selectedSwitch
            } = this.state
            const noOfSwitches = texts.length || 2
            const switchWidth = noOfSwitches * eachSwitchWidth
            const switchStyles = {
                  width: `${switchWidth}px`,
                  backgroundColor: bgColor,
                  borderWidth,
                  borderColor,
                  height,
            }
            const labelWidth = `${eachSwitchWidth || (switchWidth / noOfSwitches)}px`

            const switches = texts.map((text, index) => {
                  const labelStyles = {
                        width: labelWidth,
                        color: fontColor,
                        lineHeight: height,
                        fontSize,
                        fontWeight,
                  }
                  let classSwitchContent = `switch-content`

                  if (selectedSwitch === index) {
                        classSwitchContent = `${classSwitchContent} switch-handle-color`
                        labelStyles.color = selectedFontColor
                  }
                  return <label
                    key={index}
                    id={index}
                    className={classSwitchContent}
                    style={labelStyles}
                    onClick={this.onToggle.bind(this)}
                  >
                        {texts[index]}
                  </label>
            })

            const switchHandleStyles = {
                  width: labelWidth,
                  left: `${selectedSwitch * eachSwitchWidth + 2}px`,
                  height,
                  lineHeight: height,
            }

            let classNameHandle = 'switch-handle switch-handle-move'
            return (
              <div className='switch' style={switchStyles}>
                    {switches}
                    <span
                      className={classNameHandle}
                      style={switchHandleStyles}
                    >{}</span>
              </div>
            )
      }
}

MultiSwitch.propTypes = {
      texts: PropTypes.array.isRequired,
      selectedSwitch: PropTypes.number,
      bgColor: PropTypes.string,
      borderColor: PropTypes.string,
      borderWidth: PropTypes.string,
      fontColor: PropTypes.string,
      selectedFontColor: PropTypes.string,
      selectedSwitchColor: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeight: PropTypes.string,
      onToggleCallback: PropTypes.func,
      eachSwitchWidth: PropTypes.number,
      height: PropTypes.string,
}

MultiSwitch.defaultProps = {
      texts: ['Text 1', 'Text 2'],
      selectedSwitch: 0,
      bgColor: 'white',
      borderColor: 'black',
      borderWidth: '0.1rem',
      fontColor: 'black',
      selectedFontColor: 'yellow',
      selectedSwitchColor: 'teal',
      eachSwitchWidth: 100,
      height: '30px',
      fontSize: '12px',
      fontWeight: 'bold',
}