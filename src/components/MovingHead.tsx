import React from 'react'

import FRONT_CLOSED_EYES from 'assets/moving_head/front_closed_eyes.png'
import DOWN from 'assets/moving_head/down.png'
import DOWN_LEFT from 'assets/moving_head/down_left.png'
import DOWN_RIGHT from 'assets/moving_head/down_right.png'
import FRONT from 'assets/moving_head/front.png'
import LEFT from 'assets/moving_head/left.png'
import RIGHT from 'assets/moving_head/right.png'
import UP from 'assets/moving_head/up.png'
import UP_LEFT from 'assets/moving_head/up_left.png'
import UP_RIGHT from 'assets/moving_head/up_right.png'

interface MovingHeadState {
  image: string
  direction: Direction
}

enum Direction {
  UP,
  UP_LEFT,
  UP_RIGHT,
  DOWN,
  DOWN_LEFT,
  DOWN_RIGHT,
  LEFT,
  RIGHT,
  FRONT,
  INSIDE,
  MIDDLE
}

const IMAGES = {
  [Direction.UP]: UP,
  [Direction.UP_LEFT]: UP_LEFT,
  [Direction.UP_RIGHT]: UP_RIGHT,
  [Direction.DOWN]: DOWN,
  [Direction.DOWN_LEFT]: DOWN_LEFT,
  [Direction.DOWN_RIGHT]: DOWN_RIGHT,
  [Direction.LEFT]: LEFT,
  [Direction.RIGHT]: RIGHT,
  [Direction.UP]: UP,
  [Direction.FRONT]: FRONT,
  [Direction.INSIDE]: FRONT,
  [Direction.MIDDLE]: FRONT_CLOSED_EYES
}
export default class MovingHead extends React.Component<{}, MovingHeadState> {
  constructor (props: any) {
    super(props)
    this.state = { image: FRONT, direction: Direction.FRONT }
  }

  getDirection (x: number, y: number): Direction {
    const i = document.getElementById('moving-head-img') as HTMLElement
    const rect = i.getBoundingClientRect()
    let result = Direction.FRONT
    if (y < rect.top) {
      result = Direction.UP
      if (x > rect.right) {
        result = Direction.UP_RIGHT
      } else if (x < rect.x) {
        result = Direction.UP_LEFT
      }
    } else if (y > rect.bottom) {
      result = Direction.DOWN
      if (x > rect.right) {
        result = Direction.DOWN_RIGHT
      } else if (x < rect.x) {
        result = Direction.DOWN_LEFT
      }
    } else {
      if (x > rect.right) {
        result = Direction.RIGHT
      } else if (x < rect.x) {
        result = Direction.LEFT
      } else {
        result = Direction.INSIDE
        if (this.isInMiddleRect(x, y, rect)) {
          result = Direction.MIDDLE
        }
      }
    }
    return result
  }

  isInMiddleRect (x: number, y: number, rect: DOMRect, padding = 20): boolean {
    return (x > rect.x + padding && x < rect.right - padding) && (y > rect.y + padding && y < rect.bottom - padding)
  }

  updateImage (x: number, y: number): void {
    const direction = this.getDirection(x, y)
    this.setState({ image: IMAGES[direction], direction })
  }

  componentDidMount (): void {
    window.addEventListener('mousemove', ({ clientX, clientY }) => {
      this.updateImage(clientX, clientY)
    })
    window.addEventListener('touchstart', (touch) => {
      const { clientX, clientY } = touch.touches[0]
      this.updateImage(clientX, clientY)
    })
    window.addEventListener('touchmove', (touch) => {
      const { clientX, clientY } = touch.touches[0]
      this.updateImage(clientX, clientY)
    })
  }

  render (): React.ReactNode {
    return (
      <div>
          <img id='moving-head-img' src={this.state.image} style={{ width: 100 }}/>
      </div>
    )
  }
}
