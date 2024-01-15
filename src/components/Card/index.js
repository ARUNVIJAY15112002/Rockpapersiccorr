import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  RulesButton,
  RulesContainer,
  BgContainer,
  Card1,
  GameHead,
  ScoreCard,
  Scorehead,
  Scorestyle,
  Image,
  Btn1,
  Btn2,
  Btn3,
  Btns,
  Lcontainer,
  Items,
  Item,
  Person,
  ResultContainer,
  ResultButton,
  RolesImg,
  CancelBtn,
  RsText,
} from './styledComponents'

class Card extends Component {
  state = {
    playing: true,
    score: 0,
    ip1: '',
    ip2: '',
    result: false,
    winStatus: '',
  }

  playAgain = () => {
    this.setState({playing: true, result: false})
  }

  renderResults = () => {
    const {ip1, ip2, winStatus} = this.state
    return (
      <ResultContainer>
        <Items>
          <Item>
            <Person>YOU</Person>
            <Image src={ip1} className="img-card" alt="your choice" />
          </Item>
          <Item>
            <Person>OPPONENT</Person>
            <Image src={ip2} className="img-card" alt="opponent choice" />
          </Item>
        </Items>
        <div>
          <RsText>{winStatus}</RsText>
          <ResultButton onClick={this.playAgain}>PLAY AGAIN</ResultButton>
        </div>
      </ResultContainer>
    )
  }

  rockClicked = () => {
    const {choicesList} = this.props
    const userInput = choicesList[0].id
    const item = choicesList[Math.floor(Math.random() * choicesList.length)]
    const computerInput = item.id
    this.setState({
      ip1: choicesList[0].imageUrl,
      ip2: item.imageUrl,
      playing: false,
      result: true,
    })
    if (computerInput === 'PAPER') {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({winStatus: 'YOU LOSE'})
    } else if (computerInput === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({winStatus: 'YOU WON'})
    } else {
      this.setState({winStatus: 'IT IS DRAW'})
    }
  }

  sissorsClicked = () => {
    const {choicesList} = this.props
    const userInput = choicesList[1].id
    const item = choicesList[Math.floor(Math.random() * choicesList.length)]
    const computerInput = item.id
    this.setState({
      ip1: choicesList[1].imageUrl,
      ip2: item.imageUrl,
      playing: false,
      result: true,
    })
    if (computerInput === 'PAPER') {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({winStatus: 'YOU WON'})
    } else if (computerInput === 'ROCK') {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({winStatus: 'YOU LOSE'})
    } else {
      this.setState({winStatus: 'IT IS DRAW'})
    }
  }

  PaperClicked = () => {
    const {choicesList} = this.props
    const userInput = choicesList[2].id
    const item = choicesList[Math.floor(Math.random() * choicesList.length)]
    const computerInput = item.id
    this.setState({
      ip1: choicesList[2].imageUrl,
      ip2: item.imageUrl,
      playing: false,
      result: true,
    })
    if (computerInput === 'ROCK') {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState({winStatus: 'YOU WON'})
    } else if (computerInput === 'SCISSORS') {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({winStatus: 'YOU LOSE'})
    } else {
      this.setState({winStatus: 'IT IS DRAW'})
    }
  }

  renderGame = () => {
    const {choicesList} = this.props
    const {score} = this.state
    return (
      <>
        <div>
          <Lcontainer>
            <Btns>
              <Btn1
                className="btn1"
                onClick={this.rockClicked}
                data-testid="rockButton"
                key={choicesList[0].id}
              >
                {' '}
                <li>
                  <Image
                    src={choicesList[0].imageUrl}
                    alt={choicesList[0].id}
                  />
                </li>
              </Btn1>
              <Btn2
                className="btn2"
                onClick={this.sissorsClicked}
                data-testid="scissorsButton"
                key={choicesList[1].id}
              >
                {' '}
                <li>
                  <Image
                    src={choicesList[1].imageUrl}
                    alt={choicesList[1].id}
                  />
                </li>
              </Btn2>
            </Btns>
            <li>
              {' '}
              <Btn3
                className="btn3"
                onClick={this.PaperClicked}
                data-testid="paperButton"
                key={choicesList[2].id}
              >
                {' '}
                <li>
                  <Image
                    src={choicesList[2].imageUrl}
                    alt={choicesList[2].id}
                  />
                </li>
              </Btn3>
            </li>
          </Lcontainer>
        </div>
      </>
    )
  }

  renderRules = () => (
    <Popup
      modal
      trigger={
        <RulesButton type="button" className="trigger-button">
          Rules
        </RulesButton>
      }
    >
      {close => (
        <>
          <RulesContainer>
            <CancelBtn
              type="button"
              className="cancel-btn"
              onClick={() => close()}
            >
              {' '}
              <RiCloseLine />
            </CancelBtn>
            <RolesImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rolesImg"
            />
          </RulesContainer>
        </>
      )}
    </Popup>
  )

  render() {
    const {playing, result} = this.state
    const {ip1, ip2, score} = this.state
    console.log(ip1)
    console.log(ip2)

    const {choicesList} = this.props
    return (
      <BgContainer>
        <Card1>
          <GameHead>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </GameHead>
          <ScoreCard>
            <Scorehead className="score-head">Score</Scorehead>
            <Scorestyle className="score-style">{score}</Scorestyle>
          </ScoreCard>
        </Card1>
        {playing && this.renderGame()}
        {result && this.renderResults()}
        {this.renderRules()}
      </BgContainer>
    )
  }
}

export default Card
