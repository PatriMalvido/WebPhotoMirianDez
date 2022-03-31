import '../styles/layout/About.scss';
//import aboutme from './assets/aboutme.png';

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-header">
          Hey my name is <span>Mirian</span>{' '}
        </h1>
        <p className="about-status">
         <strong> EF 50 mm f/1.4 USM </strong> In love with details, delicacy and sensitivity. I
          seek to capture those moments in glances, caresses, feelings,... I
          don't like posed pictures, I want spontaneity in my photos, I want
          everything to flow, I would define it as visual poetry. And what about
          landscapes? they are expressions of how I see the world around me,
          beautiful, immense, full of opportunities and at the same time cruel
          and perverse.<strong> Remember this: "Against pain I have my word: firm promise to resist."</strong>
        </p>
      </div>
    </div>
  );
};
export default About;
