import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../features/productsSlice";

export class Categories extends Component {
  constructor(props) {
    super(props);

    this.chooseCategory = this.chooseCategory.bind(this);
    this.state = {
      currentItems: [],
      filteredByCategories: [],
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "Iphone",
          name: "Iphone",
        },
        {
          key: "Samsung",
          name: "Samsung",
        },
        {
          key: "Huawei",
          name: "Huawei",
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({ currentItems: this.props.products });
  }
  chooseCategory(e) {
    const { dispatch } = this.props;
    if (e.target.id == "all") {
      this.setState(
        {
          filteredByCategories: this.state.currentItems,
        },
        () => {
          this.props.setFilter(true);
          this.props.dispatch(setCategories(this.state.filteredByCategories));
        }
      );
    } else {
      this.setState(
        {
          filteredByCategories: this.state.currentItems.filter(
            (el) => el.mark === e.target.id
          ),
        },
        () => {
          this.props.setFilter(true);
          this.props.dispatch(setCategories(this.state.filteredByCategories));
        }
      );
    }
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div id={el.key} key={el.key} onClick={(e) => this.chooseCategory(e)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}
