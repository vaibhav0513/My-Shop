import { Form, useSearchParams } from "react-router-dom";

function Contact() {
  // const [searchparam] = useSearchParams();
  // const name = searchparam.get("name");
  // const email = searchparam.get("email");

  return (
    <div>
      {/* <h1>{name}</h1>
      <h2>{email}</h2> */}
      <h2>Contact</h2>
      <p>
        Current version of React.JS is V18.0.0 (April 2022).Initial Release to
        the Public (V0.3.0) was in July 2013.React.JS was first used in 2011 for
        Facebook's Newsfeed feature
      </p>
      <Form/>
    </div>
  );
}

export default Contact;
