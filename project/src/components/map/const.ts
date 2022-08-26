import { Icon } from 'leaflet';
import { MarkerUrL } from '../../constants';

export const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrL.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const currentCustomIcon = new Icon({
  iconUrl: MarkerUrL.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
