// importing needed files 
import '../components/about/aboutMe.css';
import picture from '../../Images/jlsilva.png';
    

export default function AboutMe() {
  return (
    // Container for the About Me content with the specified class name
    <div className='about-me-container'>
      <img src={picture} alt="Jose Silva" className="aboutMe-picture" />
      <h1 className='heading'>Who AM I?</h1>
      <p className='words'>
        Hello and welcome! My name is Jose Silva,
        and I'm a dedicated husband and father of
        two wonderful children.

        I've specialized in Computer Integrated Machining
        since 2018. Working with Sturm Ruger & Caterpillar! 
        I had the opportunity to improve CNC machining
        processes and enhance quality standards.

        However, fueled by a passion for technology and a
        desire to expand my skill set, I made a career pivot
        to become a Full Stack Web Developer. This transition
        has allowed me to leverage my technical expertise and
        creativity. I'm excited to continue my journey in the
        ever-evolving world of web development.
      </p>
    </div>
  );
}
