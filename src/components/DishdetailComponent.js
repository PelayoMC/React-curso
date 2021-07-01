import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>
            <h5>{dish.name}</h5>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(dish) {
    return (
      <div>
        <h4>Comments</h4>
        {dish.comments.map((comment, k) => {
          return (
            <ul className="list-unstyled" key={k}>
              <li>{comment.comment}</li>
              <li className="mt-3">{`-- ${comment.author}, ${comment.date}`}</li>
            </ul>
          );
        })}
      </div>
    );
  }

  render() {
    const dish = this.props.dish;
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5 m-1">{this.renderComments(dish)}</div>
        </div>
      );
    } else return <div></div>;
  }
}

export default Dishdetail;
