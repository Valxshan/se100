// root.js

const users = [
  { name: "Tom", country: "Singapore" },
  { name: "Jerry", country: "Malaysia" },
  { name: "Sarah", country: "Indonesia" },
];

function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>;
}

function WelcomeMessage(props) {
  return (
    <li>
      Welcome {props.name} from {props.country}
    </li>
  );
}

function WelcomeMessagesList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>
          {user.country === "Singapore" && (
            <p>Majulah Singapura, {user.name}!</p>
          )}
          <WelcomeMessage name={user.name} country={user.country} />
        </li>
      ))}
    </ul>
  );
}

function WelcomeMessagesSection() {
  return (
    <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  );
}

function App() {
  return (
    <div>
      <WelcomeMessagesSection />
    </div>
  );
}

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);

const age = 20;
const isMoreThan18 = age >= 18;
const beverage = isMoreThan18 ? "Beer" : "Juice"; // Write your code here
console.log(beverage); // 'Beer' if age is 18 or more, 'Juice' otherwise

//OR
// const age = 20;
// const beverage = age >= 18 ? "Beer" : "Juice"; // Write your code here
// console.log(beverage); // 'Beer' if age is 18 or more, 'Juice' otherwise
