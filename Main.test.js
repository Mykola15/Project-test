import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';


let  wrapped = shallow(<Main />);
describe('<Main/>',()=>{
    it('should render the Main component correctly',()=> {
        expect(wrapped).toMatchSnapshot();
    });

    it('should get new tasks', () => {
        expect(wrapped.state().hasMoreTasks).toEqual(true);
    });
    it('should generate task block', () => {
        expect(wrapped.instance().renderTasks()).toBeTruthy();
    });
});
