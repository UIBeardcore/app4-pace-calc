export default interface IDistance {
  /**
   * Distance name
   * 
   * @type {string}
   * @memberof IDistance
   */
  name: string;
  /**
   * Selected state
   * 
   * @type {number}
   * @memberof IDistance
   */
  swimDistance: number;

  /**
   * Bike distance
   * 
   * @type {number}
   * @memberof IDistance
   */
  bikeDistance: number;

  /**
   * Run distance
   * 
   * @type {number}
   * @memberof IDistance
   */
  runDistance: number;
};
