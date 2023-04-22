import React from 'react';
import Div from '../single/Div';
import Paragraph from '../single/Paragraph';
// import Span from '../single/Span';


const ErrorMessage = (props) => {
  const { errorMessage } = props;
  
  if (props.errMessStatements) {
    const statements = props.errMessStatements.map((statement, i) => (
      <React.Fragment>
        <Paragraph errorMessage={true}>{ statement }</Paragraph>
      </React.Fragment>
    ));
    return (
      <Div errorMessage={true}>
        { statements }
      </Div>
    );
  } else {
    return (
      <Div errorMessage={true}>
        <Paragraph errorMessage={true}>{ errorMessage }</Paragraph>
      </Div>
    );
  }
};


export default ErrorMessage;
