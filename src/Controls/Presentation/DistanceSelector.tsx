import * as React from "react";
import IDistance from "../../Models/Interfaces/IDistance";

import "./DistanceSelector.css";

interface IDistanceSelectorProps {
  /**
   * list of avaolable distances;
   * 
   * @type {IDistance[]}
   * @memberof IDistanceSelectorProps
   */
  availabledistances: IDistance[];

  /**
   * distance change detector;
   * 
   * @memberof IDistanceSelectorProps
   */
  onChange: (i: number) => void;
}

interface IDistanceSelectorState {
  /**
 * Selected state
 * 
 * @type {number}
 * @memberof IDistanceSelectorState
 */
  selectedDistance: number;
}

export default class DistanceSelector extends React.Component<
  IDistanceSelectorProps,
  IDistanceSelectorState
> {
  constructor() {
    super();

    this.state = {
      selectedDistance: 0
    };
  }

  componentWillUpdate(
    nextProps: IDistanceSelectorProps,
    nextState: IDistanceSelectorState
  ) {
    const { selectedDistance } = this.state;
    const { onChange } = this.props;

    if (selectedDistance !== nextState.selectedDistance) {
      onChange(nextState.selectedDistance);
    }
  }

  render(): JSX.Element {
    const { availabledistances } = this.props;
    const { selectedDistance } = this.state;

    return (
      <ul className={"x1-distance-selector list-group"}>
        {availabledistances.map((distance: IDistance, i: number) => (
          <li
            onClick={() =>
              this.setState({
                selectedDistance: i
              })}
            key={i}
            className={
              "list-group-item " + (selectedDistance === i ? "active" : "")
            }
          >
            {distance.name}
          </li>
        ))}
      </ul>
    );
  }
}
