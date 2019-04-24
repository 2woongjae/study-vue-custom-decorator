import { createDecorator } from "vue-class-component";

const MyDecorator = createDecorator((component, key, index) => {
  console.log(component);
  console.log(key);
  console.log(index);
  component.data = function() {
    return { age: 37 };
  };
});

export default MyDecorator;
