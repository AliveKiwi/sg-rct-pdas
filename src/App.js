import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage); // coverted to base64 string, Image less than < 9.7kb
console.log(CortanaImage); // coverted to base64 string, Image less than < 9.7kb
console.log(SiriImage); // treated as indiviudal item, Image size greater than > 9.7kb

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <img src={AlexaImage} />
      <img src={CortanaImage} />
      <img src={SiriImage} />

      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
