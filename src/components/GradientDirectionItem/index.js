// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirection} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
