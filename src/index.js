import Aiflow from './components/Aiflow';

const install = (Vue) => {
  Vue.component(Aiflow.name, Aiflow);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default Aiflow;
