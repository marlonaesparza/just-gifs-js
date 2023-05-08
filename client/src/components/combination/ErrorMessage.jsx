import React from 'react';
import Div from '../single/Div';
import Paragraph from '../single/Paragraph';
// import Span from '../single/Span';


const ErrorMessage = (props) => {
  const { errorMessage } = props;

  const errStatements = errorMessage.split('.');
  const errElements = errStatements.map((statement, i) => (
    <Paragraph key={i} errorMessage={true}>{ statement }.</Paragraph>
  ));
  
  if (props.errMessStatements) {
    const statements = props.errMessStatements.map((statement, i) => (
      <Paragraph key={i} errorMessage={true}>{ statement }</Paragraph>
    ));
    return (
      <Div errorMessage={true}>
      <React.Fragment>
        { statements }
      </React.Fragment>

      </Div>
    );
  } else {
    return (
      <Div errorMessage={true}>
        {/* <Paragraph errorMessage={true}>{ errorMessage }</Paragraph> */}
        { errElements }
      </Div>
    );
  }
};


export default ErrorMessage;
