import React, { FC, Component } from 'react';
import QuestionBox from '../../instance/question-box/question-box';
import AnswerBox from '../../instance/answer-box/answer-box';

export default class ChangeFaq extends Component {
  state = {
    on: true
  };

  changesvg = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return <div onClick={this.changesvg}>{this.state.on ? <QuestionBox /> : <AnswerBox />}</div>;
  }
}

// const FaqSample: FC<FaqSampleProps> = ({ closable = true, ...rest }) => {
//   if (closable === true) {
//     return <QuestionBox closable={closable} {...rest} />;
//   }
//   if (closable === false) {
//     return <div>This is false</div>;
//   }
//   return null;
// };

// export default FaqSample;
