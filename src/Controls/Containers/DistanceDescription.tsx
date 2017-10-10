import * as React from "react";
import IDistance from "../../Models/Interfaces/IDistance";

import Slider from "rc-slider";

import "rc-slider/assets/index.css";

interface IDistanceDescriptionProps {
  distance: IDistance;
}

interface IDistanceDescriptionState {
  swimSpeed: number;
  bikeSpeed: number;
  runSpeed: number;
}

export default class DistanceDescription extends React.Component<
  IDistanceDescriptionProps,
  IDistanceDescriptionState
> {
  constructor() {
    super();

    this.state = {
      swimSpeed: 100;
      bikeSpeed: number;
      runSpeed: number;    
    };
  }
  render(): JSX.Element {
    const { availabledistances } = this.props;
    const { selectedDistance } = this.state;

    return (
      <div className={"card x1-distance"}>
        <div className="card-body">
          <h4 className="card-title">{distance.name}</h4>
          <hr />
          <h6 className="card-subtitle mb-2 text-muted">Swim</h6>
          <p className="card-text">{distance.swimDistance}</p>
          <Slider defaultValue={120} min={30} max={300} onChange={log} />
          <label />
          <hr />
          <h6 className="card-subtitle mb-2 text-muted">Bike</h6>
          <p className="card-text">{distance.bikeDistance}</p>
          <Slider defaultValue={120} min={30} max={300} onChange={log} />

          <hr />
          <h6 className="card-subtitle mb-2 text-muted">Run</h6>
          <p className="card-text">{distance.runDistance}</p>
          <Slider defaultValue={120} min={30} max={300} onChange={log} />
        </div>
      </div>
    );
  }
}
