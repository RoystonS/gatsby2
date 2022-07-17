// Defining the <Greeting> component

interface GreetingProps {
  name: string;
}
const Greeting = (props: GreetingProps) => {
  return <p>Hi {props.name}!</p>;
};
