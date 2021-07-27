import { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FooterComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import Dishdetail from "./DishdetailComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreator";

const mapStateProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (com) => com.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        ></Dishdetail>
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/about"
            component={() => <AboutComponent leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={ContactComponent} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateProps, mapDispatchToProps)(Main));
