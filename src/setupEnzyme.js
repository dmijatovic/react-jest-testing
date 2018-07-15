/**
 * Enzyme setup based on JEST definitions/setup with React
 * 
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });