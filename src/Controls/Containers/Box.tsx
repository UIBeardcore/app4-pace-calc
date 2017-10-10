import * as React from "react";
import IDistance from "../../Models/Interfaces/IDistance";

import DistanceSelector from "../Presentation/DistanceSelector";
import DistanceDescription from "./DistanceDescription";

import "./Box.css";

interface IBoxState {
  /**
   * List of available distances
   * 
   * @type {IDistance[]}
   * @memberof IBoxState
   */
  availableDistances: IDistance[];

  /**
   * Selected distance
   * 
   * @type {(number | null)}
   * @memberof IBoxState
   */
  selectedDistance: number | null;
}

export default class Box extends React.Component<{}, IBoxState> {
  constructor() {
    super();

    this.state = {
      availableDistances: [],
      selectedDistance: null
    };
  }

  componentDidMount() {
    const availableDistances: IDistance[] = [
      "Sprint, 750, 20000, 5000",
      "Olympic, 1500, 40000, 10000",
      "Half, 1900, 90000, 21700",
      "Full, 3800, 180000, 432000"
    ].map(x => {
      const s = x.split(",");
      return this.getDistance(s[0], +s[1], +s[2], +s[3]);
    });

    this.setState({
      availableDistances,
      selectedDistance: 0
    });
  }

  render(): JSX.Element {
    const { selectedDistance, availableDistances } = this.state;

    return (
      <div className={"x1-box"}>
        <DistanceSelector
          availabledistances={availableDistances}
          onChange={(i: number) => {
            this.setState({
              selectedDistance: i
            });
          }}
        />
        {selectedDistance !== null && (
          <DistanceDescription
            distance={availableDistances[selectedDistance]}
          />
        )}
      </div>
    );
  }

  private getDistance = (
    name: string,
    swimDistance: number,
    bikeDistance: number,
    runDistance: number
  ): IDistance => {
    return {
      name,
      swimDistance,
      bikeDistance,
      runDistance
    } as IDistance;
  }
}
